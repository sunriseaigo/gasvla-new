'use client';

import {getOptions, languages, cookieName} from './settings';
import {
	UseTranslationOptions,
	initReactI18next,
	useTranslation as useTranslationI18next,
} from 'react-i18next';
import {useEffect, useState} from 'react';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import {useCookies} from 'react-cookie';

const runsOnServerSide = typeof window === 'undefined';

// On client side, the normal singleton is ok.
i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(resourcesToBackend(
		(language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`))
	)
	.init({
		...getOptions(),
		lng: undefined, // Let the language be detected on client side.
		detection: {
			order: ['path', 'htmlTag', 'cookie', 'navigator'],
		},
		preload: runsOnServerSide ? languages : [],
	});

export function useTranslation(
	lng?: string,
	ns?: string,
	options?: UseTranslationOptions<string>
) {
	const [cookies, setCookie] = useCookies([cookieName]);
	const useTranslationResponse = useTranslationI18next(ns, options);
	const {i18n} = useTranslationResponse;

	if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
		i18n.changeLanguage(lng);
	} else {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (activeLng !== i18n.resolvedLanguage) {
				setActiveLng(i18n.resolvedLanguage);
			}
		}, [activeLng, i18n.resolvedLanguage]);

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (lng && i18n.resolvedLanguage !== lng) {
				i18n.changeLanguage(lng);
			}
		}, [lng, i18n]);

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (cookies.i18next !== lng) {
				setCookie(cookieName, lng, {path: '/'});
			}
		}, [lng, cookies.i18next, setCookie])
	}

	return useTranslationResponse;
}
import {fallbackLng, getOptions, Language, languages} from './settings';
import {UseTranslationOptions} from 'react-i18next';
import {createInstance} from 'i18next';
import {initReactI18next} from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const initI18next = async (lng: Language, ns: string) => {
	// Oon server side we create a new instance for each render, because during compilation everything
	// seems to be executed in parallel.
	const i18nInstance = createInstance();

	await i18nInstance
		.use(initReactI18next)
		.use(resourcesToBackend(
			(language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)
		))
		.init(getOptions(lng, ns));

	return i18nInstance;
}

export async function getTranslation(
	lng?: any,
	ns?: any,
	options: UseTranslationOptions<string> = {}
) {
	const i18nextInstance = await initI18next(validateLng(lng), ns);

	return {
		t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
		i18n: i18nextInstance,
	};
}

export function useTranslation(...args: any) {
	return getTranslation(...args);
}

export function validateLng(lng: string): Language {
	return languages.indexOf(lng as Language) >= 0 ? lng as Language : fallbackLng;
}
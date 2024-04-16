export type Language = 'en' | 'ka' | 'ru';

export const fallbackLng: Language = 'en'
export const languages: Language[] = [fallbackLng, 'ka', 'ru']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
	return {
		// debug: true,
		supportedLngs: languages,
		// preload: languages,
		fallbackLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns,
	}
}
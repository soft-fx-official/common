import { i18n } from 'i18next';
interface IInit {
    debug: boolean;
    fallbackLng: string;
    supportedLngs: Array<string>;
    resources: {
        [name: string]: {
            translation: any;
        };
    };
}
declare function init(config: IInit): i18n;
export { init as initLocale };
export type { IInit as IInitLocale };

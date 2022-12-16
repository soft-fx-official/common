import { IBus } from '../../tools/bus';
declare type RedirectProps = {
    bus: IBus;
    to: 'nextStep' | 'prevStep';
    param?: {
        id: string;
    };
};
declare const Redirect: ({ bus, to, param }: RedirectProps) => any;
export { Redirect };
export type { RedirectProps };

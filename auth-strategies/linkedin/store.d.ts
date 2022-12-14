import { Router } from 'express';
import { ConfigModule, MedusaContainer } from '@medusajs/medusa/dist/types/global';
import { LinkedinAuthOptions, Profile } from './types';
declare const LinkedinStoreStrategy_base: new (...args: any[]) => any;
export declare class LinkedinStoreStrategy extends LinkedinStoreStrategy_base {
    protected readonly container: MedusaContainer;
    protected readonly configModule: ConfigModule;
    protected readonly strategyOptions: LinkedinAuthOptions;
    constructor(container: MedusaContainer, configModule: ConfigModule, strategyOptions: LinkedinAuthOptions);
    validate(req: Request, accessToken: string, refreshToken: string, profile: Profile): Promise<null | {
        id: string;
    }>;
    private defaultValidate;
}
/**
 * Return the router that hold the linkedin store authentication routes
 * @param linkedin
 * @param configModule
 */
export declare function getLinkedinStoreAuthRouter(linkedin: LinkedinAuthOptions, configModule: ConfigModule): Router;
export {};
//# sourceMappingURL=store.d.ts.map
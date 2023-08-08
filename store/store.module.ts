import { DynamicModule, Module } from "@nestjs/common";
import { StoreService } from "./store.service";
export interface StoreConfig {
    dirName: string;
    fileName: string;
}
@Module({})
export class StoreModule {
    static register(config: StoreConfig): DynamicModule {
        return {
            // name of module
            module: StoreModule,
            providers: [StoreService, {
                provide: "STORE_CONFIG",
                useValue: config
            }],
            exports: [StoreService]
        };
    }
}
import { Inject, Injectable } from "@nestjs/common";
import { StoreConfig } from "./store.module";
import * as fs from "fs";
@Injectable()
export class StoreService {
    constructor(@Inject("STORE_CONFIG") private readonly _storeConfig: StoreConfig) {
        if(!fs.existsSync(this._storeConfig.dirName)) {
            fs.mkdirSync(this._storeConfig.dirName);
        }
    }
    save(data: any) : void {
        console.log("Saving data");
        fs.appendFileSync(`${this._storeConfig.dirName}/${this._storeConfig.fileName}`, JSON.stringify(data));
    }
}
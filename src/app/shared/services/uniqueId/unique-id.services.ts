import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()

export class UniqueIdService {

    private numberOfGenerateIds = 0;
 
    public genarateUniqueWithPrefix(prefix: string): string {
        if (!prefix) {
            throw Error('Prefix can not be empty');
        }
        const uniqueId = this.genarateUniqueId();
        this.numberOfGenerateIds++;

        return `${prefix}-${uniqueId}`;
    }

    public getNumberOfGenerateUniqueIds(): number {
        return this.numberOfGenerateIds;
    }

    private genarateUniqueId(): string {
        return uuidv4;
    }

}
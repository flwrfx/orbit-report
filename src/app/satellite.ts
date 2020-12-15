export class Satellite {

    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }//constructor

    shouldShowWarning(): boolean {
        if (this.type.toLowerCase() == 'space debris'){
            return true;
        } else  {
            return false;
        }
        
    }

}
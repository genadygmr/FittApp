import { observable, action } from 'mobx';

class RegisterPageStore {



    @observable firstName: string = "";
    @observable lasName: string = "";
    @observable mail: string = "";
    @observable password: string = "";

    @action setFullName(name: string) {
        const fullName = name.split(" ");
        if (fullName.length === 2) {
            [this.firstName, this.lasName] = fullName;
        } else {
            throw new Error("name is not valid");
        }
    }

    @action setUserPassword(password: string) {
        //TODO: need to check if password is valid.
        this.password = password;
    }

    @action setUsermail(mail: string) {
        this.mail = mail;
    }

}

export default new RegisterPageStore();
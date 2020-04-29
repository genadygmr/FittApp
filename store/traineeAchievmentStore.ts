import {observable, action} from 'mobx'

class TraineeAchievmentStore {

    @observable personalData = {
        name: 'Genady Mager'
    }


    @observable statsList = [
        {
            date: new Date(),
            weight: 78,
            fat: 15,
            scope: 80
        },
        {
            date: new Date(),
            weight: 80,
            fat: 17,
            scope: 83
        }
    ];

}

let traineeAchievmentStore = new TraineeAchievmentStore();
export default traineeAchievmentStore;
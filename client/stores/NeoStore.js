'use strict';
import {observable, computed} from 'mobx';

class NeoStore {
    // state goes here
    title = 'Near Earth Objects Data';
    // select

    data = {};
    @observable qtyToSelect = 0;
    options = [];

    constructor() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://localhost:3000/api/incoming", false);
        xmlHttp.send(null);
        this.data = JSON.parse(xmlHttp.response);
        this.qtyToSelect = Object.keys(this.data.near_earth_objects).length;
        for (var i = 1; i <= this.qtyToSelect; i++) {
            var anoption = {
                value: i,
                label: i
            };
            this.options.push(anoption);
        }
    };

    @computed get displayData() {
        var diffdate = new Date();
        var tempData = Object.keys(this.data.near_earth_objects);
        tempData = tempData
                .sort(function (a, b) {
                    var distancea = Math.abs(diffdate - new Date(a));
                    var distanceb = Math.abs(diffdate - new Date(b));
                    return distancea - distanceb; // sort a before b when the distance is smaller
                });
        var retData = {};
        var numb = this.qtyToSelect;
        tempData.forEach(dateName => {
            if (numb > 0) {
                retData[dateName] = this.data.near_earth_objects[dateName];
            }
            numb--;
        });
        return retData;
    }

    logChange = () => {
        var selector = document.getElementsByName("form-field-name");
        var val = selector.length !== 0 ? selector[0].value : 8;
        console.log('logchange' + val);
        this.qtyToSelect = val;
    };

    /* FilterFunction(value, index) {
     console.log ('filter' + this.qtyToSelect);
     return index < this.qtyToSelect;
     }*/

}

let
        store = new NeoStore();
module
        .exports = store;
'use strict';
/**
* @auth:minn
* @qq:394286006
*/
function showuserchart(){
var data = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "北京",
        "上海",
        "广州",
        "深圳",
        "佛山"
    ]
};
new Chart($('#userchart'), {
    data: data,
    type: 'polarArea',
    options: {
        elements: {
            arc: {
                borderColor: "#000000"
            }
        }
    }
});

}

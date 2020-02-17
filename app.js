//console.log('Hello Wolrd!');

class order {
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }
    summarize(){
        const summary = 'order id: ' +
            this.id +
            ', message: ' +
            this.message +
            ', delivered: ' +
            this.delivered;
    return summary;
    }
    //parametrit ...koodi
    summarize_2 = () => {
        const summary = 'order id: ' +
            this.id +
            ', message: ' +
            this.message +
            ', delivered: ' +
            this.delivered;
    return summary;
    }
}

/*2.vaihe
let order = {
    id: 1234,
    message: "my order",
    delivered: false
}
*/

/*kommenttia
eri
riveillä*/
// käytä const jos muuttumaton tieto var:n sijaan
//eka vaihe
//const order_id = 1234;
//const order_messages = 'my order';
//const order_messages1 = "my order";
/*
var order_id = 1234;
var order_messages = 'my order';
var order_messages1 = "my order";
*/

//backtick
//const order_messages2 = `my order : 
//${order_id}`;

//let order_delivered = false;

/*eka ja toka vaihe
function summarize_order(id, message, delivered){
    var summary ='order id: ' +
    id +
    ', message: ' +
    message +
    ', delivered: ' +
    delivered;
    return summary;
}
*/
let order_obj = new order(1234, 'second order');

//eka vaihe
//const order_summary = summarize_order(order_id, order_message, order_delivered);
//toka vaihe
//const order_summary = summarize_order(order.id, order.message, order.delivered);
//const order_summary = summarize_order(order_obj.id, order_obj.message, order_obj.delivered);
const order_summary = order_obj.summarize_2();
console.log(order_summary);

order_delivered = true;
const order_summary_2 = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary_2);

//type error -> assigned to constant variable!!
//order_id = 5678;
//no error!!
order.id = 5678;




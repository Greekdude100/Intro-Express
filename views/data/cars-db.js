// Again this file SHOULD NOT be in the views folder only templates should live here
const cars = [
    {cars: 'lexus', expensive:true},
    {cars: 'nissan', expensive:false},
    {cars: 'audi', expensive:true}
];

module.exports = {
    getAll: function() {
        return cars;
    }
};
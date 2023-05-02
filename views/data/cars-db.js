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
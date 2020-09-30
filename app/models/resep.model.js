module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            description: String
        }
    );
    schema.method("toJSON", function(){
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Resep = mongoose.model("resep", schema);
    return Resep;
};
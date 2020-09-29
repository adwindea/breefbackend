module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            description: String,
            img: {
                data: Buffer,
                contentType: String
            }
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
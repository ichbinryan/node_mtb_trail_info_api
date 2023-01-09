module.exports = mongoose => {
    const Location = mongoose.model(
        "location",
        mongoose.Schema(
            {
                name: String,
                lat: Number,
                lon: Number
            }
        )
    )

    return Location;
};
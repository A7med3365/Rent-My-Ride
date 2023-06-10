exports.rentOut_create_post = (req, res) => {
    try {
        console.log(req.body);

        const newPost = new Post(req.body);
    
        newPost.save()
        .then(() => {
            console.log('Your post has been saved.');
            res.redirect('/cars/index');
        })
    } catch (error) {
    console.log(error.message);
    }
}
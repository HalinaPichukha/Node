const db = require('../models');
const fs = require('fs');

class PostService {
    getAll() {
        let data;
        try {
            data = db.posts;
            console.log(data)
        } catch (err) {
            throw new Error('Some error');
        }
        return data;
    }

    getById(id){
        if(typeof id === 'undefined'){
            throw ({status: 400, message: 'No id provided'});
        }
        let post;
        try {
            post = db.posts.find(post => post.id === Number(id));
        }catch(err){
            throw ({status: 500})
        }
        if(!post){
            throw ({status: 404})
        };
        return post;
    }

    insert(data){
        const post = {
            ...data,
            id: db.posts.length + 1
        }

        db.posts.push(post);

        return post;




        // let data_fron_req = JSON.stringify(data);
        //
        // fs.appendFile('myDB.txt', data_fron_req, function (err) {
        //     if (err) throw err;
        //     console.log('Updated!');
        // });
        //
        // return data_fron_req;
    }


    findByIdAndRemove(id){
        if(typeof id === 'undefined'){
            throw ({status: 400, message: 'No id provided'});
        }
        let post;
        try {
            post = db.posts.find(post => post.id === Number(id));
            db.posts.splice(post, 1);
        }catch(err){
            throw ({status: 500})
        }
        if(!post){
            throw ({status: 404})
        };
        return post;
    }

    findByIdAndUpdate(id, data){
        let post;
        try {
            post = db.posts.find(post => post.id === Number(id));
            // console.log("!!!" + post)
            post.name = data.name
            db.posts.push(post);
        }catch(err){
            throw ({status: 500})
        }
        if(!post){
            throw ({status: 404})
        };
        return post;
    }
}

module.exports = new PostService;
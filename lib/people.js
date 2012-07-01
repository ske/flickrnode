var People= function People(request) {
    this._request= request;
};

People.prototype.findByUsername= function(username, callback){
      this._request.executeRequest("flickr.people.findByUsername",
                                         {"username": username}, false, null, callback);
};

People.prototype.getPublicPhotos= function(params, callback){
	this._request.executeRequest("flickr.people.getPublicPhotos", params, false, null, callback);
};

People.prototype.getPhotos= function(params, callback){
    this._request.executeRequest("flickr.people.getPhotos", params, false, null, callback);
};

exports.People= People;

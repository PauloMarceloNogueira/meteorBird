describe("Friendships",function(){
  var userId = 1, friendId = 2;
  beforeEach(function(){
    spyOn(Meteor,"userId").and.returnValue(userId);
  });
  it("Should follow a friend",function(){
    spyOn(Friendships,"insert");
    Friendships.follow(friendId);
    var insertedArgs = Friendships.insert.call.argsFor(0);
    var expectedArgs = [{userId:userId,friendId:friendId}];
    expect(expectedArgs).toEqual(insertedArgs);
  });

  it("Should unfollow a friend",function(){

  });

  it("Should return object when user is following",function(){

  });

  it("Should return empty when user is not following",function(){

  });

  it("Should return user's followers",function(){

  });

  it("Should return user's timeline ids",function(){

  });

  it("Should return user's followings and followers",function(){

  });


});

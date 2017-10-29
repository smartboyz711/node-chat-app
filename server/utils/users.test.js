const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id : '1',
            name : 'Mike',
            room : 'Node test1'
        },{
            id : '2',
            name : 'Jen',
            room : 'Node test2'
        },{
            id : '3',
            name : 'Julie',
            room : 'Node test1'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id : '123',
            name : 'abc',
            room : 'the office Fans'
        };
        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user])
    });

    it('Should remove a user',() => {
        var resUser = users.removeUser('1');
        expect(users.users).toEqual([users.users[0],users.users[1]]);
    });

    it('Should not remove a user',() => {
        var resUser = users.removeUser('4');
        expect(users.users).toEqual(users.users);
    });

    it('Should find user',() => {
        var resUser = users.getUser('1');
        expect(resUser).toEqual(users.users[0]);
    });

    it('Should not find user',() => {
        var resUser = users.getUser('4');
        expect(resUser).toNotExist;
    });

    it('Should return names for node test1',() => {
        var userList = users.getUserList('Node test1');
        expect(userList).toEqual(['Mike','Julie']);
    });

    it('Should return names for node test2',() => {
        var userList = users.getUserList('Node test2');
        expect(userList).toEqual(['Jen']);
    });
});
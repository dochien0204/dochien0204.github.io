const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
  ];

  //menu

  function xemDS(users)
  {
        users.forEach(user => {
            console.log(user);
        });
  }
function themND(newID, newName, newAge, newGender, newMoney)
{
    users.push(
        {
            id : newID,
            name : newName,
            age : newAge,
            gender : newGender,
            money : newMoney


        }
    )
}
function xoa(id)
{
    let dem = 0;
    users.forEach((user, index) => {
        if(user.id === id)
        {
            dem++;
            users.splice(index, 1);
        }
    });
    if(dem == 0) console.log("ID ko tồn tại trong danh sách hiện thời");
}
function capNhat(id)
{
    let dem = 0;
    users.forEach(
            user => {
            if(user.id === id)
            {
                dem++;
                user.id = 24;
                user.name = "Đỗ Chiến";
                user.age = 20;
                user.gender = "Male";
                user.money = 10000;
            }
        }
    )
    if(dem == 0) console.log("ID không tồn tại trong danh sách hiện thời ! Ko update dc !");
}

function demNam()
{
    let dem = 0;
    users.forEach(
        user => {
            if(user.gender === "male" || user.gender === "Male")
                dem++;
        }
    );
    if(dem == 0)
        console.log("Không có ai giới tính nam");
    else {
        console.log("Có " + dem + " người giới tính nam" );
    }
}
function demTuoi()
{
    let dem = 0;
    users.forEach(
        user => {
            if(user.age > 15)
            {
                dem++;
            }
        }
    )
    if(dem == 0) console.log("Không có ai lớn hơn 15 tuổi");
    else {
        console.log("Có " + dem + " người lớn hơn 15 tuổi");
    }
}

function tongTien()
{
    let dem = 0;
    let tongTien = 0;
    users.forEach(
        user => {
            if(user.id %2 == 0)
            {
                dem++;
                tongTien += user.money;
            }
        }
    );
    if(dem == 0) console.log("Không ai có id chẵn");
    else {
        console.log("Tổng tiền những người có id chẵn là : " + tongTien);
    }
}

function timKiem()
{
    let max = users[0].money;
    users.forEach(
        user => {
            if(user.money > max)
                max = user.money;
        }
    );
    let min = users[0].money;
    users.forEach(
        user => {
            if(user.money < min)
                min = user.money;
        }
    );
    users.forEach(
        user => {
            if(user.money === max)
                console.log(user.name + " là người giàu nhất");
            if(user.money === min)
                console.log(user.name + " là người nghèo nhất");
        }
    );
}

function chuyenGT()
{
    users.forEach(
        user => {
            if(user.gender === "male" || user.gender === "Male")
            {
                user.gender = "female";
            }
        }
    );
}

const menu = [
    "1. Xem danh sách",
    "2. Xóa thông tin người dùng theo id",
    "3. Cập nhật thông tin người dùng"
]

console.log("========= Bonus 1 ===============");
console.log("Xem danh sách");
xemDS(users);
console.log("--------------Thêm người dùng------------------");
themND(100, "Chiến", 19, "male", 5000);
xemDS(users);
console.log("--------------Xóa thông tin người dùng----------");
xoa(1);
console.log("Sau khi xóa ");
xemDS(users);
console.log("---------------Cập nhật thông tin người dùng-----");
capNhat(2);
console.log("Sau khi cập nhật");
xemDS(users);
console.log("================Bonus 2==============");
console.log("Đếm số nam");
demNam();
console.log("Đếm tuổi");
demTuoi();
tongTien();
timKiem();
console.log("===================Bonus 3 ===========");
chuyenGT();
xemDS(users);



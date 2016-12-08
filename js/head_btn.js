var bg = document.getElementById('bg');
var btn_index = document.createElement('div');
var btn_yingyuan = document.createElement('div');
var btn_my = document.createElement('div');
var btn_shangcheng = document.createElement('div');
// 首页
btn_index.style = "position:absolute;left:50px;top:129px;width: 250px;height: 85px;";
btn_index.innerHTML = "<a id=\"Head_button_1\" style=\"display: block;width: 250px;height: 85px\" href=\"/a/club_hd_h5/index.html\"></a>";
bg.appendChild(btn_index);
// i豆影院
btn_yingyuan.style = "position:absolute;left:50px;top:220px;width: 250px;height: 85px;";
btn_yingyuan.innerHTML = "<a id=\"Head_button_2\" style=\"display: block;width: 250px;height: 85px\" href=\"/a/club_hd_h5/shoping/shoping_list.html\"></a>";
bg.appendChild(btn_yingyuan);
// 我的i豆
btn_my.style = "position:absolute;left:50px;top:310px;width: 250px;height: 85px;";
btn_my.innerHTML = "<a id=\"Head_button_3\" style=\"display: block;width: 250px;height: 85px\" href=\"/a/club_hd_h5/my/my.html\"></a>";
bg.appendChild(btn_my);
// 商城
btn_shangcheng.style = "position:absolute;left:50px;top:400px;width: 250px;height: 85px;";
btn_shangcheng.innerHTML = "<a id=\"Head_button_4\" style=\"display: block;width: 250px;height: 85px\" href=\"/a/club_hd_h5/shoping/shoping_list.html\"></a>";
bg.appendChild(btn_shangcheng);
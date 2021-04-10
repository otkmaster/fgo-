"ui";
/*
let deviceWidth = device.width;
let deviceHeight = device.height;
console.log(deviceWidth+"+"+deviceHeight);
let turn=1,i=2,j=3;
let a="ui.skill"+turn.toString()+i.toString()+j.toString()+".checked"
console.log(a);
b=i.toString()+j.toString()
eval("console.log("+b+"+1)");
*/
threads.start(function(){
    requestScreenCapture(true);
}
);
console.log(device.width);
console.log(device.height);

ui.layout(
    <vertical>
        <ScrollView>
                    <vertical>
                        <button text="先点我开启无障碍和悬浮窗,如果没有反应，说明已经开启" style="Widget.AppCompat.Button.Colored" id="click_me" w="*" />
                        <button id="stop" w="*" text="紧急停止所有任务" style="Widget.AppCompat.Button.Colored" />
                        <spinner id="gongneng" entries="刷图选关|强化英灵|强化礼装|抽活动池子|自动抽友情"/>
                        <horizontal>
                            <spinner id="yingxiong" entries="梅林|斯卡蒂|孔明|玉藻前"/>
                            <text text="+" testColor="black" textSize="15sp"/>
                            <spinner id="lizhuang" entries="任意|午餐|午茶|蒙娜丽萨|贝拉丽萨"/>
                        </horizontal>
                        <horizontal>
                            <spinner id="pingguo" entries="等600秒|吃紫苹果|吃金苹果|吃银苹果|吃铜苹果"/>
                            <input id="pingguo_ci"  text="" />
                            <text text="次" testColor="black" textSize="15sp"/>
                        </horizontal>
                        <horizontal>
                            <text text="宇宙凛宝具卡色选择" testColor="black" textSize="15sp"/>
                            <checkbox id="if_lin" text="开启"/>
                            <spinner id="ka_se" entries="绿卡|蓝卡|红卡"/>
                        </horizontal>
                        <text text="-------------------------------宝具顺序-------------------------------" testColor="black" textSize="15sp" gravity="center" />
                        <horizontal>
                            <text text="顺序" testColor="black" textSize="15sp"/>
                            <spinner id="shunxu1" entries="英灵1|英灵2|英灵3"/>
                            <text text="→" testColor="black" textSize="15sp"/>
                            <spinner id="shunxu2" entries="英灵1|英灵2|英灵3"/>
                            <text text="→" testColor="black" textSize="15sp"/>
                            <spinner id="shunxu3" entries="英灵1|英灵2|英灵3"/>
                        </horizontal>
                        <text text="-------------------------------御主礼装-------------------------------" testColor="black" textSize="15sp" gravity="center" />
                        <horizontal>
                                <text text="技能1" testColor="black"/>
                                <spinner id="yuzhulizhuang1_2" entries="1层|2层|3层"/>
                                <text text="给" testColor="black" textSize="15sp"/>
                                <spinner id="yuzhulizhuang1_3" entries="英灵1|英灵2|英灵3"/>
                                <checkbox id="yuzhulizhuang1_4" text="开启"/>
                            </horizontal>
                        <horizontal>
                                <text text="技能2" testColor="black"/>
                                <spinner id="yuzhulizhuang2_2" entries="1层|2层|3层"/>
                                <text text="给" testColor="black" textSize="15sp"/>
                                <spinner id="yuzhulizhuang2_3" entries="英灵1|英灵2|英灵3"/>
                                <checkbox id="yuzhulizhuang2_4" text="开启"/>
                        </horizontal>
                        <horizontal>
                                <text text="技能3" testColor="black"/>
                                <spinner id="yuzhulizhuang3_2" entries="1层|2层|3层"/>
                                <text text="给" testColor="black" textSize="15sp"/>
                                <spinner id="yuzhulizhuang3_3" entries="英灵1|英灵2|英灵3"/>
                                <checkbox id="yuzhulizhuang3_4" text="开启"/>
                        </horizontal>
                        <horizontal>
                            <text text="换人礼装" testColor="black" textSize="15sp"/>
                            <checkbox id="if_replace"/>
                            <spinner id="replace_1" entries="英灵1|英灵2|英灵3"/>
                            <text text="换为" testColor="black" textSize="15sp"/>
                            <spinner id="replace_2" entries="英灵4|英灵5|英灵6"/>
                        </horizontal>
                        <text text="换人后使用技能" testColor="black" textSize="15sp" />
                        <horizontal>
                                <checkbox id="skill1" text="技1" />
                                <spinner id="skill1_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill2" text="技2"/>
                                <spinner id="skill2_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill3" text="技3"/>
                                <spinner id="skill3_give" entries="1|2|3" w="230px"/>
                        </horizontal> 
                        <text text="-------------------------------从者技能-------------------------------" testColor="black" textSize="15sp" gravity="center" />
                        <text text="技能第一层：" testColor="black" textSize="20sp" gravity="left" />
                        <horizontal>
                                <text text="英灵1" testColor="black" textSize="15sp" />
                                <checkbox id="skill111" text="技1" />
                                <spinner id="skill111_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill112" text="技2"/>
                                <spinner id="skill112_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill113" text="技3"/>
                                <spinner id="skill113_give" entries="1|2|3" w="230px"/>
                        </horizontal>        
                        <horizontal>
                                <text text="英灵2" testColor="black" textSize="15sp"/>
                                <checkbox id="skill121" text="技1"/>
                                <spinner id="skill121_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill122" text="技2"/>
                                <spinner id="skill122_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill123" text="技3"/>
                                <spinner id="skill123_give" entries="1|2|3" w="230px"/>
                        </horizontal>      
                        <horizontal>
                                <text text="英灵3" testColor="black" textSize="15sp"/>
                                <checkbox id="skill131" text="技1"/>
                                <spinner id="skill131_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill132" text="技2"/>
                                <spinner id="skill132_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill133" text="技3"/>
                                <spinner id="skill133_give" entries="1|2|3" w="230px"/>
                        </horizontal>   
                        <text text="技能第二层：" testColor="black" textSize="20sp" gravity="left" />
                        <horizontal>
                                <text text="英灵1" testColor="black" textSize="15sp"/>
                                <checkbox id="skill211" text="技1"/>
                                <spinner id="skill211_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill212" text="技2"/>
                                <spinner id="skill212_give" entries="1|2|3"w="230px"/>
                                <checkbox id="skill213" text="技3"/>
                                <spinner id="skill213_give" entries="1|2|3"w="230px"/>
                        </horizontal>    
                        <horizontal>
                                <text text="英灵2" testColor="black" textSize="15sp"/>
                                <checkbox id="skill221" text="技1"/>
                                <spinner id="skill221_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill222" text="技2"/>
                                <spinner id="skill222_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill223" text="技3"/>
                                <spinner id="skill223_give" entries="1|2|3" w="230px"/>
                        </horizontal>     
                        <horizontal>
                                <text text="英灵3" testColor="black" textSize="15sp"/>
                                <checkbox id="skill231" text="技1"/>
                                <spinner id="skill231_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill232" text="技2"/>
                                <spinner id="skill232_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill233" text="技3"/>
                                <spinner id="skill233_give" entries="1|2|3" w="230px"/>
                        </horizontal>
                        <text text="技能第三层：" testColor="black" textSize="20sp" gravity="left" />
                        <horizontal>
                                <text text="英灵1" testColor="black" textSize="15sp"/>
                                <checkbox id="skill311" text="技1"/>
                                <spinner id="skill311_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill312" text="技2"/>
                                <spinner id="skill312_give" entries="1|2|3"w="230px"/>
                                <checkbox id="skill313" text="技3"/>
                                <spinner id="skill313_give" entries="1|2|3"w="230px"/>
                        </horizontal>        
                        <horizontal>
                                <text text="英灵2" testColor="black" textSize="15sp"/>
                                <checkbox id="skill321" text="技1"/>
                                <spinner id="skill321_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill322" text="技2"/>
                                <spinner id="skill322_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill323" text="技3"/>
                                <spinner id="skill323_give" entries="1|2|3" w="230px"/>
                        </horizontal>      
                        <horizontal>
                                <text text="英灵3" testColor="black" textSize="15sp"/>
                                <checkbox id="skill331" text="技1"/>
                                <spinner id="skill331_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill332" text="技2"/>
                                <spinner id="skill332_give" entries="1|2|3" w="230px"/>
                                <checkbox id="skill333" text="技3"/>
                                <spinner id="skill333_give" entries="1|2|3" w="230px"/>
                        </horizontal>   
                        <text text="-------------------------------宝具释放-------------------------------" testColor="black" textSize="15sp" gravity="center" />
                        <horizontal>
                            <text text="英灵1" testColor="black" textSize="15sp"/>
                            <checkbox id="baoju11" text="阶段1"/>
                            <checkbox id="baoju12" text="阶段2"/>
                            <checkbox id="baoju13" text="阶段3"/>
                        </horizontal>
                        <horizontal>
                            <text text="英灵2" testColor="black" textSize="15sp"/>
                            <checkbox id="baoju21" text="阶段1"/>
                            <checkbox id="baoju22" text="阶段2"/>
                            <checkbox id="baoju23" text="阶段3"/>
                        </horizontal>
                        <horizontal>
                            <text text="英灵3" testColor="black" textSize="15sp"/>
                            <checkbox id="baoju31" text="阶段1"/>
                            <checkbox id="baoju32" text="阶段2"/>
                            <checkbox id="baoju33" text="阶段3"/>
                        </horizontal>
                        <text text="-------------------------------集火目标-------------------------------" testColor="black" textSize="15sp" gravity="center" />
                        <horizontal>
                            <text text="阶段1" testColor="black" textSize="15sp"/>
                            <spinner id="enemy1" entries="右边|中间|左边" w="auto"/>
                            <text text="阶段2" testColor="black" textSize="15sp"/>
                            <spinner id="enemy2" entries="右边|中间|左边" w="auto"/>
                            <text text="阶段3" testColor="black" textSize="15sp"/>
                            <spinner id="enemy3" entries="右边|中间|左边" w="auto"/>

                        </horizontal>
// 悬浮窗
                        <button id="test" w="*" text="测试选择"/>
                        <button id="showFloating" w="*" text="加载悬浮窗"/>
                    </vertical>
        </ScrollView>
    </vertical>
);

ui.test.click(
    function(){
        if(ui.skill111.checked){
            toast("选中了");
        }
        i=1;
        eval("let b=ui.shunxu"+i.toString()+".getSelectedItemPosition()")
        console.log(b);
    }
);

function log(text){
    console.log(text);
};
    

function target(num){
            let if_skill_target = images.read("./res/qingxuanzeduixiang.jpg");
            let point2=findImage(captureScreen(),if_skill_target,{
                threshold:0.8
            });
            sleep(300)
            if_skill_target.recycle();
            if (point2){
            
                    threads.start(
                    function(){
                        click(500+num*470,665);
                        console.log("目标为"+(num+1))
                        sleep(4000)
                    }
                );
            };
        }

function skill_done(){
        let skill_done=images.read("./res/skill_done.jpg");
        let point=images.findImage(captureScreen(),skill_done,{
            region:[815,215,280,110],
            threshold:0.7
        });
        skill_done.recycle();
        if(point){
//            toastLog("关闭技能确认");
            sleep(1000)
            click(644,644);
            sleep(1500)
        }else{
 //           toastLog("无需确认");
            sleep(1400)
        }
}


function turn_num(){
    let turn_1=images.read("./res/turn_1.jpg");
    let turn_2=images.read("./res/turn_2.jpg");
    let turn_3=images.read("./res/turn_3.jpg");
    let img=captureScreen();
    let turn=0;
    for(let i=1;i<4;i++){
        eval("let point=images.findImageInRegion(img,turn_"+i+",1280,20,100,100,0.7);");
            if(point){
                turn=i;
                break;
            }
        };
    img.recycle();
    turn_1.recycle();
    turn_2.recycle();
    turn_3.recycle();
    return turn;
}

function lin(){
    let if_lin=ui.if_lin.checked;
    let ka_se=ui.ka_se.getSelectedItemPosition();
    let point=images.findColorInRegion(captureScreen(),"#ff020303",753,203,200,30,1);
    if(point){
        click(ka_se*480+485,650);
    }
    
}

function skill(turn){

    //        let dd=0;
            for(let i=3;i>0;i--)
                for(let j=3;j>0;j--)
                    {
                        let if_checked;
                        eval("if_checked=ui.skill"+turn.toString()+i.toString()+j.toString()+".checked");
                        sleep(800)
                        if(if_checked){
                            click(110+(i-1)*480+(j-1)*135,870);
                            sleep(1200)
                            skill_done();
                            let t_eval="ui.skill"+turn.toString()+i.toString()+j.toString()+"_give.getSelectedItemPosition()";
                            eval("let t="+t_eval);
                            sleep(1000)
                            lin();
                            target(t);
                            sleep(1500)             
                            };
                        };
 //                       dd++;
 //                       console.log(dd+"次循环");
                    }

        

//    thread.interrupt();


function baoju(turn){
            let a=new Array(3),b=new Array(3),order=new Array(3);
            for(let i=1;i<4;i++){
                eval("a["+(i-1).toString()+"]=ui.shunxu"+i.toString()+".getSelectedItemPosition()");
                console.log("a["+(i-1)+"]的值为"+a[i-1]);
                order[i-1]=620+a[i-1]*360;
                console.log("order["+(i-1)+"]的值为"+order[i-1]);
                eval("b["+(i-1)+"]=ui.baoju"+(a[i-1]+1).toString()+turn.toString()+".checked");
                console.log("b["+(i-1)+"]的值为"+b[i-1]);
                if(b[i-1]){
                    click(order[i-1],280);
                    sleep(600)
                }
            }
}

function card_click(){
            let card=["#ffa01919","#ff13347f","#ff1c660b"];
            let img=captureScreen();
            let k=[0,0,0,0,0];
            let p=new Array(5);
            let q=0;
            for(let i=0;i<3;i++)
            for(let j=0;j<5;j++)
            {
                let if_card=images.findColorInRegion(img,card[i],50+j*380,485,330,370,0.5);
                let if_kezhi=images.findColor(img,"#ffa01919",{
                    threshold:4,
                    region:[50+j*380,485,330,370]
                });
                if(if_card){
                    if(if_kezhi&&k[j]==0){
                    //  console.log("点击第"+(j+1)+"张卡");
//                    click(50+j*380+170,485+280);
                    p[q]=50+j*380+170;
                    q++;
                    k[j]=1;
                    }
                }
            };
            for(let i=0;i<3;i++)
            for(let j=0;j<5;j++)
            {
                let if_card=images.findColorInRegion(img,card[i],50+j*380,485,330,370,0.5);
                let if_kezhi=images.findColor(img,"#ffa01919",{
                    threshold:4,
                    region:[50+j*380,485,330,370]
                });
                if(if_card){
                    if(!if_kezhi&&k[j]==0){
            //           console.log("点击第"+(j+1)+"张卡");
//                    click(50+j*380+170,485+280);
                    p[q]=50+j*380+170;
                    q++;
                    }
                }
            };
            for(let j=0;j<3;j++){
                click(p[j],485+280);
                sleep(400)
            };
            sleep(400)
            img.recycle();
}


function eat_apple(apple){
        var action_point=images.read("./res/shengjingshi.jpg");
        var which=ui.pingguo.getSelectedItemPosition();
        var point=findImage(captureScreen(),action_point,{
            threshold:0.7
        });
        sleep(1500)
        if(point){
                if(which==0){
                    let i=0;
                    while(i<60){
                        toastLog("等待"+(600-10*i)+"秒");
                        sleep(10e3)
                        i++;
                    };
                    click(957,926)
                    return 0;
                }else{
                    if(apple==0){
                        toastLog("吃第"+(parseInt(ui.pingguo_ci.getText())-which+1)+"个苹果");
                        click(550,410+(which-1)*220);
                        sleep(1500)
                        click(1250,840);
                        apple--;
                        return apple;
                    }else{
                        toastLog("苹果已吃完，停止战斗")
                    }
            }
        };
        action_point.recycle();
    }

function enemy(){
    turn=turn_num();
    num=eval("ui.enemy"+turn.toString()+".getSelectedItemPosition()");
    click(650-num*225,500);
}

function replace(){
    var x=ui.replace_1.getSelectedItemPosition();
    var y=ui.replace_2.getSelectedItemPosition();
    click(205+x*300,525);
    sleep(1500)
    click(205+(y+3)*300,525);
    sleep(1500)
    click(945,945);
    sleep(3500)
    var a=new Array(3),t=new Array(3);;
    for(let i=0;i<3;i++){
        a[i]=eval("ui.skill"+(i+1).toString()+".checked");
        t[i]=eval("ui.skill"+(i+1).toString()+"_give.getSelectedItemPosition()");
    };
    for(let i=0;i<3;i++){
        if(a[i]){
            click(110+x*480+i*135,870);
            sleep(1500)
            skill_done();
            sleep(1000)
            lin();
            target(t[i]);
            sleep(5500)     
        }
    }
}



function findhero(){
    let x=ui.yingxiong.getSelectedItemPosition();
    let y=ui.lizhuang.getSelectedItemPosition();
    let yingxiong=images.read("./res/h_"+x+".jpg");
    let lizhuang=images.read("./res/l_"+y+".jpg");
    let zhuzhan=images.read("./res/zhuzhan.jpg");
    function find(){
        let i=0;
        find_1:
        while(true){
            let point=images.findImage(captureScreen(),yingxiong,{
                region:[30,250,370,600],
                threshold:0.7
            });
                if(point){
                    let point2=images.findImage(captureScreen(),lizhuang,{
                        region:[point.x,point.y,400,280],
                        threshold:0.7
                    });
                    console.log(point);
                    console.log("找到英灵了");
                    if(point2){
                        sleep(1200)
                        click(point.x+130,point.y+130);
                        console.log("找到礼装了");
                        break;
                    }
                }
                swipe(864,764,1000,464,800);
                sleep(1200)
                i++;
                console.log(i);
                if(i>20){
                    find_2:
                    while(true){     //判断列表更新是否可用 #ff01c5f8
                        let point3=images.findColorInRegion(captureScreen(),"#ff01c5f8",1238,184,5,5);
                        if(point3){
                            click(1276,195);
                            sleep(500)
                            click(1259,830);
                            i=0;
                            break find_2;
                        }else{
                            sleep(11000)
                        }
                    }
                };
                }
    };
    find();
    sleep(1800)
/*
    let point4=images.findImage(captureScreen(),zhuzhan,{
        threshold:0.3
    });
    let point5=images.findImage(captureScreen(),yingxiong,{
        region:[point4.x-100,point4.y-60,400,600],
        threshold:0.1
    });
    if(point5){console.log("英灵没错了")};
    console.log(point5);
    let point6=images.findImage(captureScreen(),lizhuang,{
        region:[point5.x-30,point5.y,450,700],
        threshold:0.1
    });
    console.log(point6);
    if(point6){console.log("礼装没错了")};
    if(!point5||!point6){
        toastLog("选择错误，重新开始");
        click(point4.x,point4.y);
        sleep(1500)
        find();
    }
*/
    yingxiong.recycle();
    lizhuang.recycle();
    zhuzhan.recycle();    
}

function yuzhu(turn){
    let if_open=new Array(3);
    let which_turn=new Array(3);
    let t=new Array(3);
    let if_replace=ui.if_replace.checked;
    for(let i=0;i<3;i++){
        if_open[i]=eval("ui.yuzhulizhuang"+(i+1).toString()+"_"+"4.checked");
        which_turn[i]=eval("ui.yuzhulizhuang"+(i+1).toString()+"_"+"2.getSelectedItemPosition()+1");
        t[i]=eval("ui.yuzhulizhuang"+(i+1).toString()+"_"+"3.getSelectedItemPosition()");
    };
    for(let i=0;i<3;i++){
        if(if_open[i]==1&&turn==which_turn[i]){
            click(1790,474);
            sleep(800)
            if(if_open[i]==1&&turn==which_turn[i]){
                click(1352+140*i,469);
                sleep(400)
                if(if_replace&&i==2){
                    replace();
                }else{
                    skill_done();
                    target(t[i]);
                }
        }
    }
    }
}

//寻找副本的无穷符号
//(1460,332,#ff4aadff)  (1492,317,#ff4db0fa) (1524,319,#ff449aee)
function fuben(){
    let colors=[
        [32,-15,"#ff4db0fa"],
        [64,-13,"#ff449aee"]
    ];
    let point=images.findMultiColors(captureScreen(),"#ff4aadff",colors,{
        threshold:30,
        region:[900,150,800,350]
    });
    return point;
}

/*****************/
/*****悬浮窗******/
/****************/
ui.showFloating.click(() => {
    threads.start(function(){
    // engines.execScriptFile("fgoFloaty.js");
    toastLog("进入游戏界面可看到悬浮窗");
    
    /*********
     **主线程**
     *********/
    log("当前线程为主线程:" + threads.currentThread());
    var window=floaty.window(
        <vertical id="all" >
            <text w="80" h="35" bg="#77ffffff" textSize="10sp">点我可移动</text>
            <horizontal>
                <button id="begin"  text="开始" w="40" h="35" bg="#77ffffff" textSize="10sp"/>
                <button id="end" text="停止" w="40" h="35" bg="#77ffffff" textSize="10sp"/>
            </horizontal>
            <button id="exit" text="关闭我" w="80" h="35" bg="#77ffffff" textSize="10sp"/>
        </vertical>
    )
    // let width=device.width;//获取设备宽度
    // let height=device.height;//获取设备的高度
    window.setPosition(1600,100);//(x,y),左上角的位置
    
    window.all.click(()=>{
        window.setAdjustEnabled(!window.isAdjustEnabled());
    });//点击悬浮窗可以移动
    //begin and end!!!good job;
    window.begin.click(()=>{
        toastLog("你点击了开始");
        let thread_begin=threads.start(
            function(){
                var apple=parseInt(ui.pingguo_ci.getText());
                start:
                while(true){
                    let turn=turn_num();
//                    let apple=parseInt(ui.pingguo_ci.getText());
                    toastLog("当前是回合"+turn);
                    if(turn!=0){
                        let colors=[
                            [135,36,"#ff02daeb"],
                            [14,149,"#ff0265c8"],
                            [58,163,"#ff0057cb"]
                        ];
                        let point=images.findMultiColors(captureScreen(),"#ff00e5f5",colors,{
                            threshold:4,
                            region:[1547,787]
                        });
                        let i=0;
                        while(!point){
                            sleep(6000)
                        //检测攻击按钮是否存在 (1663,834,#ff00e5f5)   (1798,870,#ff02daeb)  (1677,983,#ff0265c8) (1721,997,#ff0057cb)
                            let colors=[
                                [135,36,"#ff02daeb"],
                                [14,149,"#ff0265c8"],
                                [58,163,"#ff0057cb"]
                            ]
                            let point=images.findMultiColors(captureScreen(),"#ff00e5f5",colors,{
                                threshold:4,
                                region:[1547,787]
                            })
                            if(i<12){
                                i++;
                            }else{
                                thread_begin.interrupt();
                                toastLog("出现无限循环，打断");
                            }
                            if(point){
                                break;
                            }
                        };
                        sleep(1200)
                        enemy();
                        sleep(1800)
                        skill(turn);
                        sleep(800)
                        yuzhu(turn);
                        sleep(2500)
                        click(1700,915);
                        sleep(2000)
                        baoju(turn);
                        card_click(turn);
                        sleep(15000)
                        while(true){
                            let colors=[
                                [135,36,"#ff02daeb"],
                                [14,149,"#ff0265c8"],
                        //        [58,163,"#ff0057cb"]
                            ];
                            let point=images.findMultiColors(captureScreen(),"#ff00e5f5",colors,{
                                threshold:20,
                                region:[1547,787]
                            });
                            if(point){
    //                           turn=turn_num();
    //                           toastLog("当前是回合"+turn);
                                break;
                            }else{
                                let turn_end=images.read("./res/turn_end.jpg");
                                let status=findImage(captureScreen(),turn_end,{
                                    threshold:0.8
                                });
                                turn_end.recycle();
                                if(status){
                                    sleep(1500)
                                    click(464,536);
                                    sleep(1500)
                                    click(1392,716);
                                    sleep(1500)
                                    click(1661,1004);
                                    sleep(1200)
                                    click(655,850);
                                    sleep(5000)
                                    into:
                                    while(true){
                                        let point=fuben();
                                        sleep(2000)
                                        if(point){
                                            click(point.x,point.y);
                                            console.log("点击目标");
                                            sleep(2500)
                                            var apple=eat_apple(apple);
                                            let pp=images.findColorInRegion(captureScreen(),"#ff01c5f8",1238,184,5,5);
                                            if(pp){
                                                continue start;
                                            }                   
                                        }else{
                                            sleep(3000)
                                        }
                                    }
                                }else{
                                    sleep(4000)
                                }
                            }
                        }
                    }else{
                        sleep(3500)
                        console.log("开始选择从者");
                        findhero();
                        sleep(3000);
                        click(1769,1003);
                        sleep(15000)
                    }
                }   
            })
    })
    window.end.click(()=>{
        toastLog("已经停止-暂停");
        threads.shutDownAll();
    })
    window.exit.click(()=>{
        toastLog("我已经被关闭");
        window.close();
    })
    //一个开启悬浮窗  
    window.exitOnClose();
    setInterval(()=>{}, 1000);
    
    // setInterval,每隔一段时间执行一次
    // setTimeout(callback, delay[, ...args])
    // callback {Function} 当定时器到点时要调用的函数。
    // delay {number} 调用 callback 之前要等待的毫秒数。
    // ...args {any} 当调用 callback 时要传入的可选参数。
    });
});

ui.pingguo_ci.setText("0");

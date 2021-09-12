// Hi this is just a game.
// Please don't kill the fun by looking at the source code QwQ!!!!
// Didn't thought this project can have the surprise function.
// Therefore I didn't write the backend OwO.
// Please respect the rule of the game!
// Thank you!!!
// Bonny Wang

import resultLoad from "./backGround.js";

const publicPath = "/spacePersona/";

var app = new Vue({
    el: '#app',
    data: {
      message: '宇宙矿时代身份指南',
      loadProgress:0,
      
      resultDes:'该身份无已知信息',
      resultText:'N/A',
      resultAdvice:'自由地野蛮生长吧！',
      startShow:false,
      qShowIndex: -1,

      showImage: false,
      loadingImage:false,
      
      resultPersona: '神秘的未知星际流浪者',

      // 8 Properties 
      // academic:0,
      // resources:0,
      // engineering:0,
      // saving:0,
      // romantic:0,
      // vision:0,
      // practical:0,
      // careful:0
      properties:[0,0,0,0,0,0,0,0],
      bonnyProperties:[2,2,1,2,0,3,3,2],
      polyProperties:[2,1,3,0,1,1,2,3],
      mengProperties:[2,1,4,0,0,2,1,2],
      xiaoJiaProperties:[0,3,4,0,0,3,2,2],
      chengWenProperties:[1,1,2,1,2,1,3,2],
      ziyiProperties:[0,1,4,1,2,1,1,3],
      CopernicusProperties:[1,4,0,0,1,2,3,1]
    },

    methods: {
      showQ1: function (event) {
        this.startShow = false;
        this.qShowIndex = 0;

        document.getElementById("bgm").src = publicPath+'img/qBgm.wav';
        document.getElementById("bgm").play();
      },

      calResolution: function(){
        if(screen.width >= 600){
          alert("请使用手机打开网页！");
          document.body.style.display = 'none';
        }
      },
      checkSpecial: function(){
        if(JSON.stringify(this.properties)==JSON.stringify(this.bonnyProperties)){
          console.log("You've discovered Bonny!");
          this.properties = [0,0,0,0,0,0,0,0];
          this.resultPersona = "博尼";
          this.resultDes = "游戏小实习生";
          this.resultText = "奇奇怪怪的生物，在起源太空实习。";
          this.resultAdvice = "想成为宇宙矿时代的博尼吗？嘿嘿嘿，先发现所有的彩蛋吧。"
        }else if(JSON.stringify(this.properties)==JSON.stringify(this.polyProperties)){
          console.log("You've discovered WenHan!");
          this.properties = [7,0,0,0,0,0,0,0];
          this.resultPersona = "周文翰";
          this.resultDes = "多面体";
          this.resultText = "即将要去法国读博士的行星科学家，苏老师的得意门生。";
          this.resultAdvice = "想要成为周文翰，你需要每天认真阅读论文，对行星防御，小行星分裂有深刻的见解。";
        }else if(JSON.stringify(this.properties)==JSON.stringify(this.mengProperties)){
          console.log("You've discovered Su Meng!");
          this.properties = [7,7,7,7,7,7,7,7];
          this.resultPersona = "苏萌";
          this.resultDes = "起源太空创始人/CEO";
          this.resultText = "人类迄今为止认知到的银河系最大的结构，\“费米气泡\”的发现者。创办起源太空，希望借太空采矿推动天文发展，拓展人类文明的疆界。";
          this.resultAdvice = "想要成为苏萌，你需要对宇宙、人类起源怀有强烈的好奇心，以及探索世界永不枯竭的动力。就算你知道最终的答案也许毫无意义。";
        }else if(JSON.stringify(this.properties)==JSON.stringify(this.xiaoJiaProperties)){
          console.log("You've discovered SleepyCat!");
          this.properties = [7,7,7,7,7,7,7,7];
          this.resultPersona = "太空精灵猫";
          this.resultDes = "虚拟化身";
          this.resultText = "起源太空的美女行星科学家，学术担当。";
          this.resultAdvice = "想要成为精灵猫，你需要拥有跳跳糖一样迅捷而灵敏的思维，让应接不暇的灵感轰击你的大脑吧。精灵猫对天文学，对小行星有深刻的了解。对各种天文知识，公式以及数值信手拈来。现下之余，别忘了喝上一杯最爱的咖啡哦。";
        }else if(JSON.stringify(this.properties)==JSON.stringify(this.chengWenProperties)){
          console.log("You've discovered chengWen!");
          this.properties = [7,7,7,7,7,7,7,7];
          this.resultPersona = "杨成文";
          this.resultDes = "起源太空副总裁";
          this.resultText = "起源太空的商业担当。";
          this.resultAdvice = "想要成为杨成文，你需要对商业市场以及资本运作有敏锐的观察力，能够及时捕捉到夹缝中的机遇与机会，并拥有统筹、协调各个项目的出色领导力。";
        }else if(JSON.stringify(this.properties)==JSON.stringify(this.ziyiProperties)){
          console.log("You've discovered ziYi!");
          this.properties = [0,0,0,7,7,7,0,0];
          this.resultPersona = "黑豆儿";
          this.resultDes = "资深设计师";
          this.resultText = "起源太空的设计担当。";
          this.resultAdvice = "想要成为黑豆儿，你需要每天都迸发出满脑子的创意，将任何也许枯燥的内容变得动人无比，同时也对细节有完美的把控。";
        }else if(JSON.stringify(this.properties)==JSON.stringify(this.CopernicusProperties)){
          this.properties = [7,0,0,0,0,0,7,7];
          this.resultPersona = "尼古拉·哥白尼";
          this.resultDes = "穿越时空的天文学家";
          this.resultText = "文艺复兴时期天文学家，日心说倡导者。";
          this.resultAdvice = "N/A";

        }else{
          console.log(this.properties);
        }

      },
      calcResult: function (event){
        const resultProperty = indexOfMax(this.properties);
        resultLoad();
        
        document.getElementById("bgm").src = publicPath +'img/resultBgm.wav';
        document.getElementById("bgm").loop = false;
        document.getElementById("bgm").play();
        
        switch(resultProperty) {
          case 0:
            this.resultPersona = "科学狂人";
            this.resultDes = "矿时代的学术领袖";
            this.resultText = "浮躁的太空淘金时代中，你仍然对人类，对宇宙怀有好奇，而正是这一份好奇推动着人类的知识的疆界。";
            this.resultAdvice = "从太空中获取的资源并不只有经济、生产价值，将宇宙中获取的物质用于你的学术研究，对你了解小行星的形成乃至到世界的形成都有巨大帮助。随着信息地不断积累，技术的不断迭代，你也许可以获得无限接近于真相的真相。";
            break;
          case 1:
            this.resultPersona = "矿时代亿万富翁";
            this.resultDes = "手握宇宙无限资源";
            this.resultText = "在宇宙采矿时代，你擅长平衡各方面资源，也善于发现新的财富机会，将成为矿时代的第一批亿万富翁。";
            this.resultAdvice = "小行星上蕴含着巨大的经济价值，仅一颗灵神星就有让世界经济崩溃的力量，通过开采地球上像铂金一样少有或是开采难度大的重金属，你将快速收获财富。同时，在开采过程中控制成本也非常重要，比如，在太空中3D打印卫星，可以大大减少逃离地球引力所需的能源。";
            break;
          case 2:
            this.resultPersona = "采矿工程师";
            this.resultDes = "开启矿时代的钥匙";
            this.resultText = "任何伟大工业想法没有你都无法实现。你的专业技能以及工程思维让你能够实现无数种采矿姿势，真正开启全民宇宙淘金时代。";
            this.resultAdvice = "太空中环境与地球有着很大的不同，比如采矿需要先稳定小行星的旋转。如何获取能源也是采矿机器人的一大问题，可以使用太阳能或是收集C type小行星上的水，将水分解成氢气和氧气，用作燃料，同时，水还能保护生物免受宇宙辐射。";
            break;
          case 3:
            this.resultPersona = "无私拯救者";
            this.resultDes = "矿时代文明守护者";
            this.resultText = "你对家园与宇宙生态都有着超乎寻常的责任感，比起抢占资源，你更希望能够保护你所爱的一切免受灾害的影响。";
            this.resultAdvice = "小行星采矿不仅可以帮助人类收获资源，也可以服务于清理太空垃圾。如果人类不断发射航天器并不进行回收，产生的碎片将使得人类再也走不出地球。同时，与地球轨道相近的小行星也可能对人类文明带来灭顶之灾，例如2029年一颗叫做Aposis就将比月球更接近地球。";
            break;
          case 4:
            this.resultPersona = "星际大艺术家";
            this.resultDes = "宇宙的浪漫不止";
            this.resultText = "在大家都疯狂收集资源的时代，你依然有着浪漫的艺术情怀，比起外面的世界，你也希望在知识爆炸的新时代探索自己，从内心出发，在这个独一无二的时代，创造独属自己的世界。";
            this.resultAdvice = "随着人类对太空资源的开采，人类对宇宙的了解也越来越多，新的灵感将不断涌现，关于人类起源、宇宙起源的艺术创作，将引领大众了解更多以往世界未知的美丽。";
            break;
          case 5:
            this.resultPersona = "太空预言家";
            this.resultDes = "拥有远见的未来主义者";
            this.resultText = "比起眼前的利益，你更喜欢长远地布局未来。这在太空时代是必不可少的特质之一，结合现有信息以及你的远见，你将在太空时代越走越远。";
            this.resultAdvice = "人类走向宇宙，一定不会是一个迅速的过程。而小行星采矿背后巨大地商业利益，也许可以成为推动人类走出地球的契机。以此为基点，你将展望未来无限的可能性。";
            break;
          case 6:
            this.resultPersona = "宇宙践行者";
            this.resultDes = "太空实战家";
            this.resultText = "你不仅仅满足于纸上谈兵，遨游太空、星际旅行这些听起来像科幻小说一般的事情，在你的一腔热忱和不断实验中将变成现实。";
            this.resultAdvice = "由于人类对太空的了解仍然有限，从事任何航天活动都需要大量实验来检验可行性。这其中会花费无数的人力和资源，但如果没有人去做，就不会实现。而你，就是推动这一切的源动力。";
            break;
          case 7:
            this.resultPersona = "星际规划师";
            this.resultDes = "谨慎的决策领袖";
            this.resultText = "作为宇宙矿时代的领导者，你胆大又仔细的策划与部署大大降低了人类各项宇宙计划实施的风险。在你的带领下，人类将不断创造更多的辉煌。";
            this.resultAdvice = "宇宙中存在无数未知的危险，每一个决策都可能导向致命的结果，甚至整个文明的毁灭，只有不断想方设法地收集更多地信息，步步为营才能成为最终赢家。";
            break;
          default:
            this.resultPersona = "神秘的未知漫游者"
        }

        this.checkSpecial();
      },

      generateImage:function(){
        console.log("Generate Image");
        this.showImage = true;
        this.loadingImage = true;
        document.getElementById("mResult").scrollTo(0,0);
        document.getElementById("mResult").style.height = 'fit-content';
        document.getElementById("mResult").style.position = 'inherit';
        
        document.body.style.overflowY = 'scroll';
        document.body.style.padding = '70px';
        document.getElementById("threeBackGround").style.display = 'none';
        document.getElementById("downArrow").style.display = 'none';
        document.getElementById("playBgm").style.display = 'none';
        document.getElementById("generateButton").style.display = 'none';


        html2canvas(document.body, {scrollY: -window.scrollY,backgroundColor:'#000000'}).then(function(canvas) {
          
          var imgGenerated = new Image();
          imgGenerated.src = canvas.toDataURL();
          document.body.appendChild(imgGenerated);
          imgGenerated.style.position = 'absolute';
          imgGenerated.style.width = '100%';

          document.getElementById("app").style.display = 'none';
          
          document.body.style.background = 'none';
          document.body.style.padding = '0px';

          document.getElementById("share").style.display = 'block';

        });
      },
      playMusic: function(){
        const bgm = document.getElementById("bgm");
        const playButton = document.getElementById("playBgm")
        if(bgm.paused){
          bgm.play();
          playButton.style.border = "3px solid red";
        }else{
          bgm.pause();
          playButton.style.border = "none";
        }
      }
    },
    mounted:function(){
      console.log("Hi this is just a game. Please don't kill the fun by looking at the source code QwQ!!!")
      this.calResolution();
    }
  })


  function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    // console.log(arr);
    // console.log(maxIndex);

  return maxIndex;
}

export default app;


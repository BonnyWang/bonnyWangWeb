var app = new Vue({
    el: '#app',
    data: {
      message: '一直仰望星空',
      
      q1Show: false,
      resultShow:false,
      startShow:true,
      qShowIndex: -1,
      
      p1Score: 0,
      
      resultPersona: '你是终极矿工',

      // 8 Properties 
      // academic:0,
      // resources:0,
      // engineering:0,
      // saving:0,
      // romantic:0,
      // vision:0,
      // practical:0,
      // careful:0
      properties:[0,0,0,0,0,0,0,0]
    },

    methods: {
      showQ1: function (event) {
        this.startShow = false;
        this.qShowIndex = 0;
      },

      calcResult: function (event){
        resultProperty = indexOfMax(this.properties);
        switch(resultProperty) {
          case 0:
            this.resultPersona = "学术矿工"
            break;
          case 1:
            this.resultPersona = "资源富翁"
            break;
          case 2:
            this.resultPersona = "挖矿工程师"
            break;
          case 3:
            this.resultPersona = "拯救者清洁工"
            break;
          case 4:
            this.resultPersona = "浪漫矿工"
            break;
          case 5:
            this.resultPersona = "远见矿工"
            break;
          case 6:
            this.resultPersona = "实践者"
            break;
          case 7:
            this.resultPersona = "谨慎矿工"
            break;
          default:
            this.resultPersona = "神秘的未知星际穿越矿工"
        }
      }
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

    return maxIndex;
}
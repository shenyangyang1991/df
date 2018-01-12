

$(function () {


 
  /* Morris.js Charts */
  // Sales chart
  var area = new Morris.Area({
    element: 'revenue-chart',
    resize: true,
    data: [
      {y: '2017-09-01', item1: 28, item2: 1},
      {y: '2017-09-02', item1: 12, item2: 1},
      {y: '2017-09-03', item1: 67, item2: 2},
      {y: '2017-09-04', item1: 69, item2: 2},
      {y: '2017-09-05', item1: 1, item2: 1},
      {y: '2017-09-06', item1: 40, item2: 2},
      {y: '2017-09-07', item1: 300, item2: 3},
      {y: '2017-09-08', item1: 17, item2: 4},
      { y: '2017-09-09', item1: 5, item2: 4 },
      { y: '2017-09-10', item1: 345, item2: 48 },
      { y: '2017-09-11', item1: 345, item2: 1 },
      { y: '2017-09-12', item1: 3, item2: 1 },
      { y: '2017-09-13', item1: 123, item2: 21 },
      { y: '2017-09-14', item1: 43, item2: 1 },
      { y: '2017-09-15', item1: 200, item2: 1 },
      { y: '2017-09-16', item1: 48, item2: 12 },
      { y: '2017-09-17', item1: 150, item2: 1 },
      { y: '2017-09-18', item1: 107, item2: 3 },
      { y: '2017-09-19', item1: 82, item2: 24 },
      { y: '2017-09-20', item1: 708, item2: 5 },
      { y: '2017-09-21', item1: 78, item2: 5 },
      { y: '2017-09-22', item1: 12, item2: 5 },
      { y: '2017-09-23', item1: 37, item2: 2},
      { y: '2017-09-24', item1: 0, item2: 4 },
      { y: '2017-09-25', item1: 50, item2: 5 },
      { y: '2017-09-26', item1: 40, item2: 2 },
      { y: '2017-09-27', item1: 1, item2: 2 },
      { y: '2017-09-28', item1: 17, item2: 1 },
      { y: '2017-09-29', item1: 832, item2: 1 },
      { y: '2017-09-30', item1: 278, item2: 1 }
    ],
    xkey: 'y',
    ykeys: ['item2', 'item1'],
    labels: ['缴费次数', '缴费金额'],
    lineColors: ['#ffb422', '#1cf1f2']
    
  });

  //显示遮罩层    
  function showMask() {
    $(".mask").css("height", $(document).height());
    $(".mask").css("width", $(document).width());
    $(".mask").show();
  }
  //隐藏遮罩层  
  function hideMask() {

    $(".mask").hide();
  }  
  function adminUserHide(){
    $(".modal-dialog .admin-user").hide();
  }
  function adminUserShow(){
    $(".modal-dialog .admin-user").show();
  }
  // showMask();
  adminUserHide();
  $(".modal-dialog .content > div").hide();

  $(".user-body .text-center").click(function(){
    adminUserShow();
    showMask();
    $(".modal-dialog").show();
    $(".modal-dialog .content > div").eq($(this).index()).show();
    $(".modal-dialog .title li").removeClass("active").eq($(this).index()).addClass("active");
  
  })
  $(".modal-dialog .title li").click(function(){
    
    $(".modal-dialog .title li").removeClass("active");
    $(this).addClass("active");
    $(".modal-dialog .content > div").hide().eq($(this).index()).show();
  })
  $(".modal-dialog button").click(function(){
    adminUserHide();
    hideMask();
    $(".modal-dialog .content > div").hide();
    $(".modal-dialog").hide();
  })


  // $(".modal-quit").show();
  $(".quit-js").click(function(){
    showMask();
    $(".modal-quit").show();
  })
  $(".modal-quit button").click(function () {
    
    hideMask();
    $(".modal-quit").hide();
  })




  

});

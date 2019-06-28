const temp = {
	//日期装换
	timeStamp:(target, type, format) =>{
	  if (type == 1) {
		var date = target ? new Date(target * 1000) : new Date(),
		  format = format || 'Y-M-D h:m:s',
		  formatArr = format.split(''),
		  datereturn = '',
		  dateArr = {
			Y: date.getFullYear(),
			M: date.getMonth() + 1 <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
			D: date.getDate() <= 9 ? '0' + date.getDate() : date.getDate(),
			h: date.getHours() <= 9 ? '0' + date.getHours() : date.getHours(),
			m: date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes(),
			s: date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()
		  };
		for (var j = 0, len = format.length; j < len; j++) {
		  datereturn += ((j + 1) % 2 == 0) ? formatArr[j] : dateArr[formatArr[j]];
		}
		return datereturn;
	  } else if (type == 2) {
		var time_stamp = 0;
		if (target) {
		  time_stamp = new Date(target.replace(/-/g, '/')).getTime().toString().substr(0, 10);
		} else {
		  time_stamp = Date.parse(new Date()) / 1000;
		}
		return !isNaN(time_stamp) ? time_stamp : 0;
	  }
	},
	//分割数据
	splitArray: (chartArr, num)=> {
		var allData = []; //用来装处理完的数组
		var currData = []; //子数组用来存分割完的数据
		for (var i = 0; i < chartArr.length; i++) {
		  currData.push(chartArr[i]);
		  if ((i != 0 && (i + 1) % num == 0) || i == chartArr.length - 1) {
			allData.push(currData);
			currData = [];
		  }
		}
		return allData;
	  },
}
export default temp
// 1. Tạo các đối tượng cho Mark và John
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69, // mét
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95, // mét
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  // 2. Tính chỉ số BMI cho cả Mark và John
  mark.calcBMI();
  john.calcBMI();
  
  // 3. Ghi ra người có chỉ số BMI cao hơn
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} có chỉ số BMI (${mark.bmi.toFixed(1)}) cao hơn ${john.fullName} (${john.bmi.toFixed(1)})!`);
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} có chỉ số BMI (${john.bmi.toFixed(1)}) cao hơn ${mark.fullName} (${mark.bmi.toFixed(1)})!`);
  } else {
    console.log(`${mark.fullName} và ${john.fullName} có chỉ số BMI bằng nhau (${mark.bmi.toFixed(1)})!`);
  }
  
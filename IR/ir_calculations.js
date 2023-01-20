inss_percentage = 0.07;

range_salary_Start = [0.01, 100000.01, 200000.01, 350000.01, 500000.01];
range_salary_End = [100000, 200000, 350000, 500000];

base_range = [0, 0, 15000, 45000, 82500];

ir_percentage_range = [0, 0.15, 0.20, 0.25, 0.30];

excess_values = [0,100000,200000,350000,500000];

let brute_monthly

brute_inss_deducted = 0;

base = 0;
ir_percentage = 0;
excess = 0;

//Start of calculus

brute_anually = (brute_monthly * 12) * 36;

//Inss calculation

function calculateInss(brute_anually){

    inss = brute_anually * 0.07;
    brute_inss_deducted = brute_anually - inss;

    return inss;
}

function retrieveValue(brute_inss_deducted){
    brute_inss_deducted = brute_inss_deducted;

     for (i=0; i < range_salary_Start.length; i++){
        range_Start = range_salary_Start[i]
        if (i < range_salary_End.length){ range_End = range_salary_End[i]; } 
        
        console.log (`value of range start ${range_Start}`);
        console.log (`value of range End ${range_End}`);

        if(brute_inss_deducted >= range_Start){
            base = base_range[i];
            ir_percentage = ir_percentage_range[i];
            excess = excess_values[i]    
        }

        //   if (i = range_salary_Start.length - 1){
        //      if (brute_inss_deducted >= range_Start){
        //          base = base_range[i];
        //          ir_percentage = ir_percentage_range[i];
        //          excess = excess_values[i]
                
        //     };
    //    }else{
    //         if(brute_inss_deducted >= range_salary_Start[i] && brute_inss_deducted <= range_salary_End[i]){
    //             base = base_range[i];
    //             ir_percentage = ir_percentage_range[i];
    //             excess = excess_values[i]
    //         };        
    //     };
        // if (brute_inss_deducted >= range_salary_End[i]){
        //     console.log("Salary is higher than limit " + range_salary_End[i]);
        // }else {
        //     console.log("Salary is lower than limit " + range_salary_End[i]);
        // }
    };

}

//Salary Range data retrieval



//Ir calculus
function calculateIr(){
   return ir = (brute_inss_deducted - excess) * ir_percentage + base;
}

//neto = (brute - ((brute * inss_percentage) + ((brute - excess)* ir_percentage + base)))
function calculateNeto (brute_anually, inss, ir ){
    let neto;
    return  neto = (brute_anually - ((inss) + (ir)));
    monthly = neto / 12;
}
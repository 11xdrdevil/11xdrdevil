var str = "He earns 5000 euro from salary per month, 1000 euro annual bonus, 15000 euro online courses per month.";
            var matches = str.match(/\d+/g);
              
            if (matches) {
                salaryPerMonth= matches[0]
                annualBonus = matches[1]
                onlineCourses = matches[2]
            }
            // console.log(matches)
            // alert((Number(salaryPerMonth))*12 + (Number(annualBonus)) + (Number(onlineCourses))*12)
// object for point layer
const selectObj = {
  points: [
      {label:"Total UI Claims",var:"CumClaims",min:"60 Claims",max:"240K",circles:["interpolate",["linear"],["get","CumClaims"],60,5,15077,9,30093,13,60126,17,90159,21,120192,25,150225,29,180258,33,210291,37,240324,41]},
      {label:"Closures/Layoffs",var:"CurrentWarns",min:"0",max:"70+",circles:["interpolate",["linear"],["get","CurrentWarns"],0,1,4.82,5,9.63,9,19.25,13,28.88,17,38.5,21,43.3,25,48.13,29,57.75,33,67.38,37,77,41]},
    ]
}

// object for list of geographies
const geographies = {
  "state"  : ["Georgia"],
  "msa"    : ["Albany, GA","Americus, GA","Athens-Clarke County, GA","Atlanta-Sandy Springs-Alpharetta, GA","Augusta-Richmond County, GA-SC","Bainbridge, GA","Brunswick, GA","Calhoun, GA","Cedartown, GA","Chattanooga, TN-GA","Columbus, GA-AL","Cordele, GA","Cornelia, GA","Dalton, GA","Douglas, GA","Dublin, GA","Eufaula, AL-GA","Fitzgerald, GA","Gainesville, GA","Hinesville, GA","Jefferson, GA","Jesup, GA","LaGrange, GA","Macon-Bibb County, GA","Milledgeville, GA","Moultrie, GA","Rome, GA","St. Marys, GA","Savannah, GA","Statesboro, GA","Summerville, GA","Thomaston, GA","Thomasville, GA","Tifton, GA","Toccoa, GA","Valdosta, GA","Vidalia, GA","Warner Robins, GA","Waycross, GA"],
  "county" : ["Appling County","Atkinson County","Bacon County","Baker County","Baldwin County","Banks County","Barrow County","Bartow County","Ben Hill County","Berrien County","Bibb County","Bleckley County","Brantley County","Brooks County","Bryan County","Bulloch County","Burke County","Butts County","Calhoun County","Camden County","Candler County","Carroll County","Catoosa County","Charlton County","Chatham County","Chattahoochee County","Chattooga County","Cherokee County","Clarke County","Clay County","Clayton County","Clinch County","Cobb County","Coffee County","Colquitt County","Columbia County","Cook County","Coweta County","Crawford County","Crisp County","Dade County","Dawson County","Decatur County","DeKalb County","Dodge County","Dooly County","Dougherty County","Douglas County","Early County","Echols County","Effingham County","Elbert County","Emanuel County","Evans County","Fannin County","Fayette County","Floyd County","Forsyth County","Franklin County","Fulton County","Gilmer County","Glascock County","Glynn County","Gordon County","Grady County","Greene County","Gwinnett County","Habersham County","Hall County","Hancock County","Haralson County","Harris County","Hart County","Heard County","Henry County","Houston County","Irwin County","Jackson County","Jasper County","Jeff Davis County","Jefferson County","Jenkins County","Johnson County","Jones County","Lamar County","Lanier County","Laurens County","Lee County","Liberty County","Lincoln County","Long County","Lowndes County","Lumpkin County","McDuffie County","McIntosh County","Macon County","Madison County","Marion County","Meriwether County","Miller County","Mitchell County","Monroe County","Montgomery County","Morgan County","Murray County","Muscogee County","Newton County","Oconee County","Oglethorpe County","Paulding County","Peach County","Pickens County","Pierce County","Pike County","Polk County","Pulaski County","Putnam County","Quitman County","Rabun County","Randolph County","Richmond County","Rockdale County","Schley County","Screven County","Seminole County","Spalding County","Stephens County","Stewart County","Sumter County","Talbot County","Taliaferro County","Tattnall County","Taylor County","Telfair County","Terrell County","Thomas County","Tift County","Toombs County","Towns County","Treutlen County","Troup County","Turner County","Twiggs County","Union County","Upson County","Walker County","Walton County","Ware County","Warren County","Washington County","Wayne County","Webster County","Wheeler County","White County","Whitfield County","Wilcox County","Wilkes County","Wilkinson County","Worth County"],
  "rc"     : ["ARC","Coastal","CSRA","Georgia Mountains","Heart of Georgia","Middle Georgia","Northeast","Northwest","River Valley","Southern","Southwest","Three Rivers"]
};

// object for kpis
const kpiSelect = {
  "Georgia": {
    "MarchEmployed": "4,936,482",
    "CumClaims": "1,793,861",
    "Employed": "3,142,621",
    "Unemployed": "2,017,514",
    "PctChngEmployed": "-36.3%",
    "LaborForce": "5,160,135",
    "Rate": "39.1%",
    "CurrentWarns": "320"
  },
  "Atlanta-Sandy Springs-Alpharetta, GA": {
    "MarchEmployed": "2,995,413",
    "CumClaims": "1,137,152",
    "Employed": "1,858,261",
    "Unemployed": "1,267,450",
    "PctChngEmployed": "-38.0%",
    "LaborForce": "3,125,711",
    "Rate": "40.5%",
    "CurrentWarns": "206"
  },
  "ARC": {
    "MarchEmployed": "2,360,403",
    "CumClaims": "921,503",
    "Employed": "1,438,900",
    "Unemployed": "1,025,152",
    "PctChngEmployed": "-39.0%",
    "LaborForce": "2,464,052",
    "Rate": "41.6%",
    "CurrentWarns": "181"
  },
  "Fulton County": {
    "MarchEmployed": "538,690",
    "CumClaims": "240,324",
    "Employed": "298,366",
    "Unemployed": "265,534",
    "PctChngEmployed": "-44.6%",
    "LaborForce": "563,900",
    "Rate": "47.1%",
    "CurrentWarns": "77"
  },
  "Gwinnett County": {
    "MarchEmployed": "475,385",
    "CumClaims": "176,481",
    "Employed": "298,904",
    "Unemployed": "195,535",
    "PctChngEmployed": "-37.1%",
    "LaborForce": "494,439",
    "Rate": "39.5%",
    "CurrentWarns": "21"
  },
  "Northwest": {
    "MarchEmployed": "405,999",
    "CumClaims": "153,244",
    "Employed": "252,755",
    "Unemployed": "171,198",
    "PctChngEmployed": "-37.7%",
    "LaborForce": "423,953",
    "Rate": "40.4%",
    "CurrentWarns": "18"
  },
  "DeKalb County": {
    "MarchEmployed": "386,405",
    "CumClaims": "144,000",
    "Employed": "242,405",
    "Unemployed": "161,821",
    "PctChngEmployed": "-37.3%",
    "LaborForce": "404,226",
    "Rate": "40.0%",
    "CurrentWarns": "20"
  },
  "Cobb County": {
    "MarchEmployed": "413,181",
    "CumClaims": "135,892",
    "Employed": "277,289",
    "Unemployed": "152,231",
    "PctChngEmployed": "-32.9%",
    "LaborForce": "429,520",
    "Rate": "35.4%",
    "CurrentWarns": "30"
  },
  "Coastal": {
    "MarchEmployed": "317,116",
    "CumClaims": "130,866",
    "Employed": "186,250",
    "Unemployed": "145,496",
    "PctChngEmployed": "-41.3%",
    "LaborForce": "331,746",
    "Rate": "43.9%",
    "CurrentWarns": "28"
  },
  "Northeast": {
    "MarchEmployed": "294,417",
    "CumClaims": "102,991",
    "Employed": "191,426",
    "Unemployed": "115,670",
    "PctChngEmployed": "-35.0%",
    "LaborForce": "307,096",
    "Rate": "37.7%",
    "CurrentWarns": "12"
  },
  "Georgia Mountains": {
    "MarchEmployed": "340,824",
    "CumClaims": "103,730",
    "Employed": "237,094",
    "Unemployed": "116,995",
    "PctChngEmployed": "-30.4%",
    "LaborForce": "354,089",
    "Rate": "33.0%",
    "CurrentWarns": "17"
  },
  "Three Rivers": {
    "MarchEmployed": "241,316",
    "CumClaims": "88,006",
    "Employed": "153,310",
    "Unemployed": "98,871",
    "PctChngEmployed": "-36.5%",
    "LaborForce": "252,181",
    "Rate": "39.2%",
    "CurrentWarns": "10"
  },
  "Savannah, GA": {
    "MarchEmployed": "181,075",
    "CumClaims": "82,144",
    "Employed": "98,931",
    "Unemployed": "90,037",
    "PctChngEmployed": "-45.4%",
    "LaborForce": "188,968",
    "Rate": "47.6%",
    "CurrentWarns": "21"
  },
  "Middle Georgia": {
    "MarchEmployed": "210,770",
    "CumClaims": "63,860",
    "Employed": "146,910",
    "Unemployed": "73,954",
    "PctChngEmployed": "-30.3%",
    "LaborForce": "220,864",
    "Rate": "33.5%",
    "CurrentWarns": "15"
  },
  "Clayton County": {
    "MarchEmployed": "132,369",
    "CumClaims": "63,030",
    "Employed": "69,339",
    "Unemployed": "70,567",
    "PctChngEmployed": "-47.6%",
    "LaborForce": "139,906",
    "Rate": "50.4%",
    "CurrentWarns": "14"
  },
  "Chatham County": {
    "MarchEmployed": "133,760",
    "CumClaims": "66,147",
    "Employed": "67,613",
    "Unemployed": "72,135",
    "PctChngEmployed": "-49.5%",
    "LaborForce": "139,748",
    "Rate": "51.6%",
    "CurrentWarns": "21"
  },
  "Henry County": {
    "MarchEmployed": "111,813",
    "CumClaims": "49,971",
    "Employed": "61,842",
    "Unemployed": "55,194",
    "PctChngEmployed": "-44.7%",
    "LaborForce": "117,036",
    "Rate": "47.2%",
    "CurrentWarns": "4"
  },
  "Southern": {
    "MarchEmployed": "171,814",
    "CumClaims": "57,258",
    "Employed": "114,556",
    "Unemployed": "65,666",
    "PctChngEmployed": "-33.3%",
    "LaborForce": "180,222",
    "Rate": "36.4%",
    "CurrentWarns": "2"
  },
  "CSRA": {
    "MarchEmployed": "201,236",
    "CumClaims": "56,503",
    "Employed": "144,733",
    "Unemployed": "66,857",
    "PctChngEmployed": "-28.1%",
    "LaborForce": "211,590",
    "Rate": "31.6%",
    "CurrentWarns": "19"
  },
  "River Valley": {
    "MarchEmployed": "140,006",
    "CumClaims": "47,002",
    "Employed": "93,004",
    "Unemployed": "54,727",
    "PctChngEmployed": "-33.6%",
    "LaborForce": "147,731",
    "Rate": "37.0%",
    "CurrentWarns": "11"
  },
  "Augusta-Richmond County, GA-SC": {
    "MarchEmployed": "174,865",
    "CumClaims": "50,161",
    "Employed": "124,704",
    "Unemployed": "58,856",
    "PctChngEmployed": "-28.7%",
    "LaborForce": "183,560",
    "Rate": "32.1%",
    "CurrentWarns": "18"
  },
  "Cherokee County": {
    "MarchEmployed": "132,269",
    "CumClaims": "43,074",
    "Employed": "89,195",
    "Unemployed": "47,818",
    "PctChngEmployed": "-32.6%",
    "LaborForce": "137,013",
    "Rate": "34.9%",
    "CurrentWarns": "4"
  },
  "Dalton, GA": {
    "MarchEmployed": "55,627",
    "CumClaims": "35,183",
    "Employed": "20,444",
    "Unemployed": "38,166",
    "PctChngEmployed": "-63.2%",
    "LaborForce": "58,610",
    "Rate": "65.1%",
    "CurrentWarns": "7"
  },
  "Southwest": {
    "MarchEmployed": "141,783",
    "CumClaims": "41,696",
    "Employed": "100,087",
    "Unemployed": "48,949",
    "PctChngEmployed": "-29.4%",
    "LaborForce": "149,036",
    "Rate": "32.8%",
    "CurrentWarns": "3"
  },
  "Columbus, GA-AL": {
    "MarchEmployed": "99,075",
    "CumClaims": "34,952",
    "Employed": "64,123",
    "Unemployed": "40,344",
    "PctChngEmployed": "-35.3%",
    "LaborForce": "104,467",
    "Rate": "38.6%",
    "CurrentWarns": "6"
  },
  "Athens-Clarke County, GA": {
    "MarchEmployed": "94,982",
    "CumClaims": "32,781",
    "Employed": "62,201",
    "Unemployed": "36,963",
    "PctChngEmployed": "-34.5%",
    "LaborForce": "99,164",
    "Rate": "37.3%",
    "CurrentWarns": "6"
  },
  "Forsyth County": {
    "MarchEmployed": "118,985",
    "CumClaims": "33,155",
    "Employed": "85,830",
    "Unemployed": "37,431",
    "PctChngEmployed": "-27.9%",
    "LaborForce": "123,261",
    "Rate": "30.4%",
    "CurrentWarns": "6"
  },
  "Douglas County": {
    "MarchEmployed": "70,758",
    "CumClaims": "28,433",
    "Employed": "42,325",
    "Unemployed": "31,801",
    "PctChngEmployed": "-40.2%",
    "LaborForce": "74,126",
    "Rate": "42.9%",
    "CurrentWarns": "5"
  },
  "Macon-Bibb County, GA": {
    "MarchEmployed": "99,042",
    "CumClaims": "30,369",
    "Employed": "68,673",
    "Unemployed": "35,187",
    "PctChngEmployed": "-30.7%",
    "LaborForce": "103,860",
    "Rate": "33.9%",
    "CurrentWarns": "9"
  },
  "Whitfield County": {
    "MarchEmployed": "41,079",
    "CumClaims": "26,596",
    "Employed": "14,483",
    "Unemployed": "28,696",
    "PctChngEmployed": "-64.7%",
    "LaborForce": "43,179",
    "Rate": "66.5%",
    "CurrentWarns": "6"
  },
  "Muscogee County": {
    "MarchEmployed": "73,095",
    "CumClaims": "28,017",
    "Employed": "45,078",
    "Unemployed": "32,206",
    "PctChngEmployed": "-38.3%",
    "LaborForce": "77,284",
    "Rate": "41.7%",
    "CurrentWarns": "5"
  },
  "Hall County": {
    "MarchEmployed": "99,375",
    "CumClaims": "31,074",
    "Employed": "68,301",
    "Unemployed": "34,622",
    "PctChngEmployed": "-31.3%",
    "LaborForce": "102,923",
    "Rate": "33.6%",
    "CurrentWarns": "6"
  },
  "Gainesville, GA": {
    "MarchEmployed": "99,375",
    "CumClaims": "31,074",
    "Employed": "68,301",
    "Unemployed": "34,622",
    "PctChngEmployed": "-31.3%",
    "LaborForce": "102,923",
    "Rate": "33.6%",
    "CurrentWarns": "6"
  },
  "Fayette County": {
    "MarchEmployed": "56,392",
    "CumClaims": "23,757",
    "Employed": "32,635",
    "Unemployed": "25,937",
    "PctChngEmployed": "-42.1%",
    "LaborForce": "58,572",
    "Rate": "44.3%",
    "CurrentWarns": "5"
  },
  "Heart of Georgia": {
    "MarchEmployed": "110,798",
    "CumClaims": "27,202",
    "Employed": "83,596",
    "Unemployed": "33,979",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "117,575",
    "Rate": "28.9%",
    "CurrentWarns": "3"
  },
  "Coweta County": {
    "MarchEmployed": "72,598",
    "CumClaims": "26,421",
    "Employed": "46,177",
    "Unemployed": "29,226",
    "PctChngEmployed": "-36.4%",
    "LaborForce": "75,403",
    "Rate": "38.8%",
    "CurrentWarns": "5"
  },
  "Brunswick, GA": {
    "MarchEmployed": "49,880",
    "CumClaims": "21,072",
    "Employed": "28,808",
    "Unemployed": "23,323",
    "PctChngEmployed": "-42.2%",
    "LaborForce": "52,131",
    "Rate": "44.7%",
    "CurrentWarns": "4"
  },
  "Richmond County": {
    "MarchEmployed": "81,385",
    "CumClaims": "27,198",
    "Employed": "54,187",
    "Unemployed": "31,773",
    "PctChngEmployed": "-33.4%",
    "LaborForce": "85,960",
    "Rate": "37.0%",
    "CurrentWarns": "11"
  },
  "Bibb County": {
    "MarchEmployed": "65,106",
    "CumClaims": "22,933",
    "Employed": "42,173",
    "Unemployed": "26,210",
    "PctChngEmployed": "-35.2%",
    "LaborForce": "68,383",
    "Rate": "38.3%",
    "CurrentWarns": "8"
  },
  "Warner Robins, GA": {
    "MarchEmployed": "79,400",
    "CumClaims": "23,319",
    "Employed": "56,081",
    "Unemployed": "26,808",
    "PctChngEmployed": "-29.4%",
    "LaborForce": "82,889",
    "Rate": "32.3%",
    "CurrentWarns": "6"
  },
  "Bartow County": {
    "MarchEmployed": "49,039",
    "CumClaims": "22,277",
    "Employed": "26,762",
    "Unemployed": "24,422",
    "PctChngEmployed": "-45.4%",
    "LaborForce": "51,184",
    "Rate": "47.7%",
    "CurrentWarns": "5"
  },
  "Glynn County": {
    "MarchEmployed": "37,192",
    "CumClaims": "17,237",
    "Employed": "19,955",
    "Unemployed": "18,871",
    "PctChngEmployed": "-46.3%",
    "LaborForce": "38,826",
    "Rate": "48.6%",
    "CurrentWarns": "4"
  },
  "Clarke County": {
    "MarchEmployed": "56,639",
    "CumClaims": "21,877",
    "Employed": "34,762",
    "Unemployed": "24,638",
    "PctChngEmployed": "-38.6%",
    "LaborForce": "59,400",
    "Rate": "41.5%",
    "CurrentWarns": "5"
  },
  "Paulding County": {
    "MarchEmployed": "83,644",
    "CumClaims": "23,499",
    "Employed": "60,145",
    "Unemployed": "26,776",
    "PctChngEmployed": "-28.1%",
    "LaborForce": "86,921",
    "Rate": "30.8%",
    "CurrentWarns": "2"
  },
  "Albany, GA": {
    "MarchEmployed": "62,615",
    "CumClaims": "22,496",
    "Employed": "40,119",
    "Unemployed": "25,950",
    "PctChngEmployed": "-35.9%",
    "LaborForce": "66,069",
    "Rate": "39.3%",
    "CurrentWarns": "3"
  },
  "Houston County": {
    "MarchEmployed": "68,028",
    "CumClaims": "19,421",
    "Employed": "48,607",
    "Unemployed": "22,344",
    "PctChngEmployed": "-28.5%",
    "LaborForce": "70,951",
    "Rate": "31.5%",
    "CurrentWarns": "4"
  },
  "Rockdale County": {
    "MarchEmployed": "43,141",
    "CumClaims": "16,541",
    "Employed": "26,600",
    "Unemployed": "18,714",
    "PctChngEmployed": "-38.3%",
    "LaborForce": "45,314",
    "Rate": "41.3%",
    "CurrentWarns": "1"
  },
  "Newton County": {
    "MarchEmployed": "50,330",
    "CumClaims": "18,240",
    "Employed": "32,090",
    "Unemployed": "20,806",
    "PctChngEmployed": "-36.2%",
    "LaborForce": "52,896",
    "Rate": "39.3%",
    "CurrentWarns": "2"
  },
  "Valdosta, GA": {
    "MarchEmployed": "61,058",
    "CumClaims": "18,507",
    "Employed": "42,551",
    "Unemployed": "21,368",
    "PctChngEmployed": "-30.3%",
    "LaborForce": "63,919",
    "Rate": "33.4%",
    "CurrentWarns": "1"
  },
  "Walton County": {
    "MarchEmployed": "44,728",
    "CumClaims": "15,995",
    "Employed": "28,733",
    "Unemployed": "17,820",
    "PctChngEmployed": "-35.8%",
    "LaborForce": "46,553",
    "Rate": "38.3%",
    "CurrentWarns": "0"
  },
  "Carroll County": {
    "MarchEmployed": "53,432",
    "CumClaims": "19,095",
    "Employed": "34,337",
    "Unemployed": "21,658",
    "PctChngEmployed": "-35.7%",
    "LaborForce": "55,995",
    "Rate": "38.7%",
    "CurrentWarns": "3"
  },
  "Rome, GA": {
    "MarchEmployed": "42,518",
    "CumClaims": "17,418",
    "Employed": "25,100",
    "Unemployed": "19,390",
    "PctChngEmployed": "-41.0%",
    "LaborForce": "44,490",
    "Rate": "43.6%",
    "CurrentWarns": "2"
  },
  "Floyd County": {
    "MarchEmployed": "42,518",
    "CumClaims": "17,418",
    "Employed": "25,100",
    "Unemployed": "19,390",
    "PctChngEmployed": "-41.0%",
    "LaborForce": "44,490",
    "Rate": "43.6%",
    "CurrentWarns": "2"
  },
  "Columbia County": {
    "MarchEmployed": "72,874",
    "CumClaims": "17,077",
    "Employed": "55,797",
    "Unemployed": "19,920",
    "PctChngEmployed": "-23.4%",
    "LaborForce": "75,717",
    "Rate": "26.3%",
    "CurrentWarns": "6"
  },
  "Lowndes County": {
    "MarchEmployed": "48,933",
    "CumClaims": "16,187",
    "Employed": "32,746",
    "Unemployed": "18,496",
    "PctChngEmployed": "-33.1%",
    "LaborForce": "51,242",
    "Rate": "36.1%",
    "CurrentWarns": "1"
  },
  "Barrow County": {
    "MarchEmployed": "39,359",
    "CumClaims": "14,273",
    "Employed": "25,086",
    "Unemployed": "15,757",
    "PctChngEmployed": "-36.3%",
    "LaborForce": "40,843",
    "Rate": "38.6%",
    "CurrentWarns": "0"
  },
  "Gordon County": {
    "MarchEmployed": "27,055",
    "CumClaims": "11,369",
    "Employed": "15,686",
    "Unemployed": "12,498",
    "PctChngEmployed": "-42.0%",
    "LaborForce": "28,184",
    "Rate": "44.3%",
    "CurrentWarns": "0"
  },
  "Calhoun, GA": {
    "MarchEmployed": "27,055",
    "CumClaims": "11,369",
    "Employed": "15,686",
    "Unemployed": "12,498",
    "PctChngEmployed": "-42.0%",
    "LaborForce": "28,184",
    "Rate": "44.3%",
    "CurrentWarns": "0"
  },
  "LaGrange, GA-AL": {
    "MarchEmployed": "36,152",
    "CumClaims": "14,918",
    "Employed": "21,234",
    "Unemployed": "16,408",
    "PctChngEmployed": "-41.3%",
    "LaborForce": "37,642",
    "Rate": "43.6%",
    "CurrentWarns": "1"
  },
  "Troup County": {
    "MarchEmployed": "36,152",
    "CumClaims": "14,918",
    "Employed": "21,234",
    "Unemployed": "16,408",
    "PctChngEmployed": "-41.3%",
    "LaborForce": "37,642",
    "Rate": "43.6%",
    "CurrentWarns": "1"
  },
  "Statesboro, GA": {
    "MarchEmployed": "35,046",
    "CumClaims": "12,528",
    "Employed": "22,518",
    "Unemployed": "14,480",
    "PctChngEmployed": "-35.7%",
    "LaborForce": "36,998",
    "Rate": "39.1%",
    "CurrentWarns": "0"
  },
  "Bulloch County": {
    "MarchEmployed": "35,046",
    "CumClaims": "12,528",
    "Employed": "22,518",
    "Unemployed": "14,480",
    "PctChngEmployed": "-35.7%",
    "LaborForce": "36,998",
    "Rate": "39.1%",
    "CurrentWarns": "0"
  },
  "Chattanooga, TN-GA": {
    "MarchEmployed": "71,335",
    "CumClaims": "14,382",
    "Employed": "56,953",
    "Unemployed": "17,203",
    "PctChngEmployed": "-20.2%",
    "LaborForce": "74,156",
    "Rate": "23.2%",
    "CurrentWarns": "0"
  },
  "Dougherty County": {
    "MarchEmployed": "36,454",
    "CumClaims": "13,294",
    "Employed": "23,160",
    "Unemployed": "15,563",
    "PctChngEmployed": "-36.5%",
    "LaborForce": "38,723",
    "Rate": "40.2%",
    "CurrentWarns": "3"
  },
  "Jefferson, GA": {
    "MarchEmployed": "35,342",
    "CumClaims": "12,271",
    "Employed": "23,071",
    "Unemployed": "13,515",
    "PctChngEmployed": "-34.7%",
    "LaborForce": "36,586",
    "Rate": "36.9%",
    "CurrentWarns": "3"
  },
  "Jackson County": {
    "MarchEmployed": "35,342",
    "CumClaims": "12,271",
    "Employed": "23,071",
    "Unemployed": "13,515",
    "PctChngEmployed": "-34.7%",
    "LaborForce": "36,586",
    "Rate": "36.9%",
    "CurrentWarns": "3"
  },
  "Hinesville, GA": {
    "MarchEmployed": "33,188",
    "CumClaims": "9,603",
    "Employed": "23,585",
    "Unemployed": "11,235",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "34,820",
    "Rate": "32.3%",
    "CurrentWarns": "2"
  },
  "Murray County": {
    "MarchEmployed": "14,548",
    "CumClaims": "8,587",
    "Employed": "5,961",
    "Unemployed": "9,470",
    "PctChngEmployed": "-59.0%",
    "LaborForce": "15,431",
    "Rate": "61.4%",
    "CurrentWarns": "1"
  },
  "Spalding County": {
    "MarchEmployed": "27,599",
    "CumClaims": "10,038",
    "Employed": "17,561",
    "Unemployed": "11,562",
    "PctChngEmployed": "-36.4%",
    "LaborForce": "29,123",
    "Rate": "39.7%",
    "CurrentWarns": "0"
  },
  "Liberty County": {
    "MarchEmployed": "25,278",
    "CumClaims": "7,967",
    "Employed": "17,311",
    "Unemployed": "9,235",
    "PctChngEmployed": "-31.5%",
    "LaborForce": "26,546",
    "Rate": "34.8%",
    "CurrentWarns": "2"
  },
  "Douglas, GA": {
    "MarchEmployed": "23,041",
    "CumClaims": "9,615",
    "Employed": "13,426",
    "Unemployed": "10,821",
    "PctChngEmployed": "-41.7%",
    "LaborForce": "24,247",
    "Rate": "44.6%",
    "CurrentWarns": "0"
  },
  "Effingham County": {
    "MarchEmployed": "29,746",
    "CumClaims": "8,771",
    "Employed": "20,975",
    "Unemployed": "9,938",
    "PctChngEmployed": "-29.5%",
    "LaborForce": "30,913",
    "Rate": "32.1%",
    "CurrentWarns": "0"
  },
  "Cedartown, GA": {
    "MarchEmployed": "17,727",
    "CumClaims": "6,692",
    "Employed": "11,035",
    "Unemployed": "7,568",
    "PctChngEmployed": "-37.8%",
    "LaborForce": "18,603",
    "Rate": "40.7%",
    "CurrentWarns": "0"
  },
  "Polk County": {
    "MarchEmployed": "17,727",
    "CumClaims": "6,692",
    "Employed": "11,035",
    "Unemployed": "7,568",
    "PctChngEmployed": "-37.8%",
    "LaborForce": "18,603",
    "Rate": "40.7%",
    "CurrentWarns": "0"
  },
  "Dublin, GA": {
    "MarchEmployed": "24,287",
    "CumClaims": "6,778",
    "Employed": "17,509",
    "Unemployed": "8,355",
    "PctChngEmployed": "-27.9%",
    "LaborForce": "25,864",
    "Rate": "32.3%",
    "CurrentWarns": "1"
  },
  "Walker County": {
    "MarchEmployed": "30,551",
    "CumClaims": "7,525",
    "Employed": "23,026",
    "Unemployed": "8,800",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "31,826",
    "Rate": "27.7%",
    "CurrentWarns": "0"
  },
  "Lee County": {
    "MarchEmployed": "14,248",
    "CumClaims": "6,670",
    "Employed": "7,578",
    "Unemployed": "7,249",
    "PctChngEmployed": "-46.8%",
    "LaborForce": "14,827",
    "Rate": "48.9%",
    "CurrentWarns": "0"
  },
  "Bryan County": {
    "MarchEmployed": "17,569",
    "CumClaims": "7,226",
    "Employed": "10,343",
    "Unemployed": "7,964",
    "PctChngEmployed": "-41.1%",
    "LaborForce": "18,307",
    "Rate": "43.5%",
    "CurrentWarns": "0"
  },
  "Camden County": {
    "MarchEmployed": "19,963",
    "CumClaims": "5,595",
    "Employed": "14,368",
    "Unemployed": "6,531",
    "PctChngEmployed": "-28.0%",
    "LaborForce": "20,899",
    "Rate": "31.3%",
    "CurrentWarns": "1"
  },
  "St. Marys, GA": {
    "MarchEmployed": "19,963",
    "CumClaims": "5,595",
    "Employed": "14,368",
    "Unemployed": "6,531",
    "PctChngEmployed": "-28.0%",
    "LaborForce": "20,899",
    "Rate": "31.3%",
    "CurrentWarns": "1"
  },
  "Milledgeville, GA": {
    "MarchEmployed": "19,085",
    "CumClaims": "6,487",
    "Employed": "12,598",
    "Unemployed": "7,666",
    "PctChngEmployed": "-34.0%",
    "LaborForce": "20,264",
    "Rate": "37.8%",
    "CurrentWarns": "0"
  },
  "Summerville, GA": {
    "MarchEmployed": "9,744",
    "CumClaims": "4,982",
    "Employed": "4,762",
    "Unemployed": "5,567",
    "PctChngEmployed": "-51.1%",
    "LaborForce": "10,329",
    "Rate": "53.9%",
    "CurrentWarns": "1"
  },
  "Chattooga County": {
    "MarchEmployed": "9,744",
    "CumClaims": "4,982",
    "Employed": "4,762",
    "Unemployed": "5,567",
    "PctChngEmployed": "-51.1%",
    "LaborForce": "10,329",
    "Rate": "53.9%",
    "CurrentWarns": "1"
  },
  "Laurens County": {
    "MarchEmployed": "17,956",
    "CumClaims": "5,602",
    "Employed": "12,354",
    "Unemployed": "6,820",
    "PctChngEmployed": "-31.2%",
    "LaborForce": "19,174",
    "Rate": "35.6%",
    "CurrentWarns": "1"
  },
  "Catoosa County": {
    "MarchEmployed": "32,820",
    "CumClaims": "5,572",
    "Employed": "27,248",
    "Unemployed": "6,796",
    "PctChngEmployed": "-17.0%",
    "LaborForce": "34,044",
    "Rate": "20.0%",
    "CurrentWarns": "0"
  },
  "Oconee County": {
    "MarchEmployed": "18,870",
    "CumClaims": "4,912",
    "Employed": "13,958",
    "Unemployed": "5,535",
    "PctChngEmployed": "-26.0%",
    "LaborForce": "19,493",
    "Rate": "28.4%",
    "CurrentWarns": "1"
  },
  "Butts County": {
    "MarchEmployed": "10,413",
    "CumClaims": "4,211",
    "Employed": "6,202",
    "Unemployed": "4,675",
    "PctChngEmployed": "-40.4%",
    "LaborForce": "10,877",
    "Rate": "43.0%",
    "CurrentWarns": "0"
  },
  "Baldwin County": {
    "MarchEmployed": "16,737",
    "CumClaims": "5,693",
    "Employed": "11,044",
    "Unemployed": "6,686",
    "PctChngEmployed": "-34.0%",
    "LaborForce": "17,730",
    "Rate": "37.7%",
    "CurrentWarns": "0"
  },
  "Pickens County": {
    "MarchEmployed": "14,849",
    "CumClaims": "4,558",
    "Employed": "10,291",
    "Unemployed": "5,141",
    "PctChngEmployed": "-30.7%",
    "LaborForce": "15,432",
    "Rate": "33.3%",
    "CurrentWarns": "0"
  },
  "Harris County": {
    "MarchEmployed": "15,971",
    "CumClaims": "4,609",
    "Employed": "11,362",
    "Unemployed": "5,250",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "16,612",
    "Rate": "31.6%",
    "CurrentWarns": "0"
  },
  "Atkinson County": {
    "MarchEmployed": "4,846",
    "CumClaims": "5,080",
    "Employed": "-234",
    "Unemployed": "5,255",
    "PctChngEmployed": "-104.8%",
    "LaborForce": "5,021",
    "Rate": "104.7%",
    "CurrentWarns": "0"
  },
  "Tift County": {
    "MarchEmployed": "19,331",
    "CumClaims": "5,492",
    "Employed": "13,839",
    "Unemployed": "6,315",
    "PctChngEmployed": "-28.4%",
    "LaborForce": "20,154",
    "Rate": "31.3%",
    "CurrentWarns": "0"
  },
  "Tifton, GA": {
    "MarchEmployed": "19,331",
    "CumClaims": "5,492",
    "Employed": "13,839",
    "Unemployed": "6,315",
    "PctChngEmployed": "-28.4%",
    "LaborForce": "20,154",
    "Rate": "31.3%",
    "CurrentWarns": "0"
  },
  "Cornelia, GA": {
    "MarchEmployed": "18,277",
    "CumClaims": "5,284",
    "Employed": "12,993",
    "Unemployed": "6,156",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "19,149",
    "Rate": "32.1%",
    "CurrentWarns": "0"
  },
  "Habersham County": {
    "MarchEmployed": "18,277",
    "CumClaims": "5,284",
    "Employed": "12,993",
    "Unemployed": "6,156",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "19,149",
    "Rate": "32.1%",
    "CurrentWarns": "0"
  },
  "Moultrie, GA": {
    "MarchEmployed": "20,816",
    "CumClaims": "4,754",
    "Employed": "16,062",
    "Unemployed": "5,557",
    "PctChngEmployed": "-22.8%",
    "LaborForce": "21,619",
    "Rate": "25.7%",
    "CurrentWarns": "0"
  },
  "Colquitt County": {
    "MarchEmployed": "20,816",
    "CumClaims": "4,754",
    "Employed": "16,062",
    "Unemployed": "5,557",
    "PctChngEmployed": "-22.8%",
    "LaborForce": "21,619",
    "Rate": "25.7%",
    "CurrentWarns": "0"
  },
  "Gilmer County": {
    "MarchEmployed": "11,307",
    "CumClaims": "4,085",
    "Employed": "7,222",
    "Unemployed": "4,606",
    "PctChngEmployed": "-36.1%",
    "LaborForce": "11,828",
    "Rate": "38.9%",
    "CurrentWarns": "1"
  },
  "Waycross, GA": {
    "MarchEmployed": "23,406",
    "CumClaims": "5,748",
    "Employed": "17,658",
    "Unemployed": "6,815",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "24,473",
    "Rate": "27.8%",
    "CurrentWarns": "1"
  },
  "Dawson County": {
    "MarchEmployed": "11,976",
    "CumClaims": "4,849",
    "Employed": "7,127",
    "Unemployed": "5,293",
    "PctChngEmployed": "-40.5%",
    "LaborForce": "12,420",
    "Rate": "42.6%",
    "CurrentWarns": "1"
  },
  "Madison County": {
    "MarchEmployed": "12,780",
    "CumClaims": "4,440",
    "Employed": "8,340",
    "Unemployed": "4,972",
    "PctChngEmployed": "-34.7%",
    "LaborForce": "13,312",
    "Rate": "37.3%",
    "CurrentWarns": "0"
  },
  "Franklin County": {
    "MarchEmployed": "9,565",
    "CumClaims": "3,888",
    "Employed": "5,677",
    "Unemployed": "4,376",
    "PctChngEmployed": "-40.6%",
    "LaborForce": "10,053",
    "Rate": "43.5%",
    "CurrentWarns": "0"
  },
  "Coffee County": {
    "MarchEmployed": "18,195",
    "CumClaims": "4,535",
    "Employed": "13,660",
    "Unemployed": "5,566",
    "PctChngEmployed": "-24.9%",
    "LaborForce": "19,226",
    "Rate": "29.0%",
    "CurrentWarns": "0"
  },
  "Cordele, GA": {
    "MarchEmployed": "9,085",
    "CumClaims": "4,081",
    "Employed": "5,004",
    "Unemployed": "4,545",
    "PctChngEmployed": "-44.9%",
    "LaborForce": "9,549",
    "Rate": "47.6%",
    "CurrentWarns": "2"
  },
  "Crisp County": {
    "MarchEmployed": "9,085",
    "CumClaims": "4,081",
    "Employed": "5,004",
    "Unemployed": "4,545",
    "PctChngEmployed": "-44.9%",
    "LaborForce": "9,549",
    "Rate": "47.6%",
    "CurrentWarns": "2"
  },
  "Lumpkin County": {
    "MarchEmployed": "16,198",
    "CumClaims": "4,925",
    "Employed": "11,273",
    "Unemployed": "5,573",
    "PctChngEmployed": "-30.4%",
    "LaborForce": "16,846",
    "Rate": "33.1%",
    "CurrentWarns": "1"
  },
  "Ben Hill County": {
    "MarchEmployed": "4,995",
    "CumClaims": "4,694",
    "Employed": "301",
    "Unemployed": "5,095",
    "PctChngEmployed": "-94.0%",
    "LaborForce": "5,396",
    "Rate": "94.4%",
    "CurrentWarns": "0"
  },
  "Fitzgerald, GA": {
    "MarchEmployed": "4,995",
    "CumClaims": "4,694",
    "Employed": "301",
    "Unemployed": "5,095",
    "PctChngEmployed": "-94.0%",
    "LaborForce": "5,396",
    "Rate": "94.4%",
    "CurrentWarns": "0"
  },
  "Thomas County": {
    "MarchEmployed": "15,684",
    "CumClaims": "4,808",
    "Employed": "10,876",
    "Unemployed": "5,635",
    "PctChngEmployed": "-30.7%",
    "LaborForce": "16,511",
    "Rate": "34.1%",
    "CurrentWarns": "0"
  },
  "Thomasville, GA": {
    "MarchEmployed": "15,684",
    "CumClaims": "4,808",
    "Employed": "10,876",
    "Unemployed": "5,635",
    "PctChngEmployed": "-30.7%",
    "LaborForce": "16,511",
    "Rate": "34.1%",
    "CurrentWarns": "0"
  },
  "Vidalia, GA": {
    "MarchEmployed": "14,747",
    "CumClaims": "4,700",
    "Employed": "10,047",
    "Unemployed": "5,596",
    "PctChngEmployed": "-31.9%",
    "LaborForce": "15,643",
    "Rate": "35.8%",
    "CurrentWarns": "1"
  },
  "Fannin County": {
    "MarchEmployed": "11,005",
    "CumClaims": "3,772",
    "Employed": "7,233",
    "Unemployed": "4,271",
    "PctChngEmployed": "-34.3%",
    "LaborForce": "11,504",
    "Rate": "37.1%",
    "CurrentWarns": "0"
  },
  "Toccoa, GA": {
    "MarchEmployed": "10,179",
    "CumClaims": "3,655",
    "Employed": "6,524",
    "Unemployed": "4,178",
    "PctChngEmployed": "-35.9%",
    "LaborForce": "10,702",
    "Rate": "39.0%",
    "CurrentWarns": "0"
  },
  "Stephens County": {
    "MarchEmployed": "10,179",
    "CumClaims": "3,655",
    "Employed": "6,524",
    "Unemployed": "4,178",
    "PctChngEmployed": "-35.9%",
    "LaborForce": "10,702",
    "Rate": "39.0%",
    "CurrentWarns": "0"
  },
  "White County": {
    "MarchEmployed": "15,926",
    "CumClaims": "4,535",
    "Employed": "11,391",
    "Unemployed": "5,105",
    "PctChngEmployed": "-28.5%",
    "LaborForce": "16,496",
    "Rate": "30.9%",
    "CurrentWarns": "1"
  },
  "Peach County": {
    "MarchEmployed": "11,372",
    "CumClaims": "3,898",
    "Employed": "7,474",
    "Unemployed": "4,464",
    "PctChngEmployed": "-34.3%",
    "LaborForce": "11,938",
    "Rate": "37.4%",
    "CurrentWarns": "2"
  },
  "Banks County": {
    "MarchEmployed": "9,483",
    "CumClaims": "3,159",
    "Employed": "6,324",
    "Unemployed": "3,509",
    "PctChngEmployed": "-33.3%",
    "LaborForce": "9,833",
    "Rate": "35.7%",
    "CurrentWarns": "1"
  },
  "Haralson County": {
    "MarchEmployed": "12,149",
    "CumClaims": "5,027",
    "Employed": "7,122",
    "Unemployed": "5,590",
    "PctChngEmployed": "-41.4%",
    "LaborForce": "12,712",
    "Rate": "44.0%",
    "CurrentWarns": "0"
  },
  "Thomaston, GA": {
    "MarchEmployed": "10,939",
    "CumClaims": "3,876",
    "Employed": "7,063",
    "Unemployed": "4,382",
    "PctChngEmployed": "-35.4%",
    "LaborForce": "11,445",
    "Rate": "38.3%",
    "CurrentWarns": "0"
  },
  "Upson County": {
    "MarchEmployed": "10,939",
    "CumClaims": "3,876",
    "Employed": "7,063",
    "Unemployed": "4,382",
    "PctChngEmployed": "-35.4%",
    "LaborForce": "11,445",
    "Rate": "38.3%",
    "CurrentWarns": "0"
  },
  "Meriwether County": {
    "MarchEmployed": "8,533",
    "CumClaims": "3,187",
    "Employed": "5,346",
    "Unemployed": "3,675",
    "PctChngEmployed": "-37.3%",
    "LaborForce": "9,021",
    "Rate": "40.7%",
    "CurrentWarns": "0"
  },
  "Union County": {
    "MarchEmployed": "9,933",
    "CumClaims": "2,958",
    "Employed": "6,975",
    "Unemployed": "3,368",
    "PctChngEmployed": "-29.8%",
    "LaborForce": "10,343",
    "Rate": "32.6%",
    "CurrentWarns": "0"
  },
  "Wayne County": {
    "MarchEmployed": "10,817",
    "CumClaims": "3,134",
    "Employed": "7,683",
    "Unemployed": "3,675",
    "PctChngEmployed": "-29.0%",
    "LaborForce": "11,358",
    "Rate": "32.4%",
    "CurrentWarns": "0"
  },
  "Jesup, GA": {
    "MarchEmployed": "10,817",
    "CumClaims": "3,134",
    "Employed": "7,683",
    "Unemployed": "3,675",
    "PctChngEmployed": "-29.0%",
    "LaborForce": "11,358",
    "Rate": "32.4%",
    "CurrentWarns": "0"
  },
  "Monroe County": {
    "MarchEmployed": "12,549",
    "CumClaims": "2,951",
    "Employed": "9,598",
    "Unemployed": "3,503",
    "PctChngEmployed": "-23.5%",
    "LaborForce": "13,101",
    "Rate": "26.7%",
    "CurrentWarns": "0"
  },
  "Toombs County": {
    "MarchEmployed": "11,120",
    "CumClaims": "3,509",
    "Employed": "7,611",
    "Unemployed": "4,194",
    "PctChngEmployed": "-31.6%",
    "LaborForce": "11,805",
    "Rate": "35.5%",
    "CurrentWarns": "1"
  },
  "Putnam County": {
    "MarchEmployed": "7,823",
    "CumClaims": "2,947",
    "Employed": "4,876",
    "Unemployed": "3,368",
    "PctChngEmployed": "-37.7%",
    "LaborForce": "8,244",
    "Rate": "40.9%",
    "CurrentWarns": "0"
  },
  "Ware County": {
    "MarchEmployed": "14,997",
    "CumClaims": "3,723",
    "Employed": "11,274",
    "Unemployed": "4,448",
    "PctChngEmployed": "-24.8%",
    "LaborForce": "15,722",
    "Rate": "28.3%",
    "CurrentWarns": "1"
  },
  "Morgan County": {
    "MarchEmployed": "8,980",
    "CumClaims": "2,845",
    "Employed": "6,135",
    "Unemployed": "3,191",
    "PctChngEmployed": "-31.7%",
    "LaborForce": "9,326",
    "Rate": "34.2%",
    "CurrentWarns": "0"
  },
  "Clinch County": {
    "MarchEmployed": "2,479",
    "CumClaims": "2,761",
    "Employed": "-282",
    "Unemployed": "2,894",
    "PctChngEmployed": "-111.4%",
    "LaborForce": "2,612",
    "Rate": "110.8%",
    "CurrentWarns": "0"
  },
  "Berrien County": {
    "MarchEmployed": "7,220",
    "CumClaims": "2,603",
    "Employed": "4,617",
    "Unemployed": "3,022",
    "PctChngEmployed": "-36.1%",
    "LaborForce": "7,639",
    "Rate": "39.6%",
    "CurrentWarns": "0"
  },
  "Americus, GA": {
    "MarchEmployed": "14,352",
    "CumClaims": "3,025",
    "Employed": "11,327",
    "Unemployed": "3,919",
    "PctChngEmployed": "-21.1%",
    "LaborForce": "15,246",
    "Rate": "25.7%",
    "CurrentWarns": "2"
  },
  "Jones County": {
    "MarchEmployed": "13,248",
    "CumClaims": "2,592",
    "Employed": "10,656",
    "Unemployed": "3,142",
    "PctChngEmployed": "-19.6%",
    "LaborForce": "13,798",
    "Rate": "22.8%",
    "CurrentWarns": "0"
  },
  "Hart County": {
    "MarchEmployed": "10,571",
    "CumClaims": "2,541",
    "Employed": "8,030",
    "Unemployed": "3,120",
    "PctChngEmployed": "-24.0%",
    "LaborForce": "11,150",
    "Rate": "28.0%",
    "CurrentWarns": "0"
  },
  "Decatur County": {
    "MarchEmployed": "11,200",
    "CumClaims": "2,759",
    "Employed": "8,441",
    "Unemployed": "3,291",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "11,732",
    "Rate": "28.1%",
    "CurrentWarns": "0"
  },
  "Bainbridge, GA": {
    "MarchEmployed": "11,200",
    "CumClaims": "2,759",
    "Employed": "8,441",
    "Unemployed": "3,291",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "11,732",
    "Rate": "28.1%",
    "CurrentWarns": "0"
  },
  "Greene County": {
    "MarchEmployed": "6,649",
    "CumClaims": "2,484",
    "Employed": "4,165",
    "Unemployed": "2,837",
    "PctChngEmployed": "-37.4%",
    "LaborForce": "7,002",
    "Rate": "40.5%",
    "CurrentWarns": "1"
  },
  "Elbert County": {
    "MarchEmployed": "7,301",
    "CumClaims": "2,383",
    "Employed": "4,918",
    "Unemployed": "2,791",
    "PctChngEmployed": "-32.6%",
    "LaborForce": "7,709",
    "Rate": "36.2%",
    "CurrentWarns": "0"
  },
  "Sumter County": {
    "MarchEmployed": "12,219",
    "CumClaims": "2,763",
    "Employed": "9,456",
    "Unemployed": "3,559",
    "PctChngEmployed": "-22.6%",
    "LaborForce": "13,015",
    "Rate": "27.3%",
    "CurrentWarns": "2"
  },
  "McDuffie County": {
    "MarchEmployed": "8,420",
    "CumClaims": "2,797",
    "Employed": "5,623",
    "Unemployed": "3,362",
    "PctChngEmployed": "-33.2%",
    "LaborForce": "8,985",
    "Rate": "37.4%",
    "CurrentWarns": "1"
  },
  "Screven County": {
    "MarchEmployed": "4,791",
    "CumClaims": "2,030",
    "Employed": "2,761",
    "Unemployed": "2,340",
    "PctChngEmployed": "-42.4%",
    "LaborForce": "5,101",
    "Rate": "45.9%",
    "CurrentWarns": "0"
  },
  "Oglethorpe County": {
    "MarchEmployed": "6,693",
    "CumClaims": "1,552",
    "Employed": "5,141",
    "Unemployed": "1,818",
    "PctChngEmployed": "-23.2%",
    "LaborForce": "6,959",
    "Rate": "26.1%",
    "CurrentWarns": "0"
  },
  "Brantley County": {
    "MarchEmployed": "6,827",
    "CumClaims": "2,106",
    "Employed": "4,721",
    "Unemployed": "2,450",
    "PctChngEmployed": "-30.8%",
    "LaborForce": "7,171",
    "Rate": "34.2%",
    "CurrentWarns": "0"
  },
  "Rabun County": {
    "MarchEmployed": "6,694",
    "CumClaims": "2,292",
    "Employed": "4,402",
    "Unemployed": "2,605",
    "PctChngEmployed": "-34.2%",
    "LaborForce": "7,007",
    "Rate": "37.2%",
    "CurrentWarns": "0"
  },
  "Pike County": {
    "MarchEmployed": "8,645",
    "CumClaims": "2,438",
    "Employed": "6,207",
    "Unemployed": "2,791",
    "PctChngEmployed": "-28.2%",
    "LaborForce": "8,998",
    "Rate": "31.0%",
    "CurrentWarns": "1"
  },
  "Dodge County": {
    "MarchEmployed": "6,577",
    "CumClaims": "1,447",
    "Employed": "5,130",
    "Unemployed": "1,910",
    "PctChngEmployed": "-22.0%",
    "LaborForce": "7,040",
    "Rate": "27.1%",
    "CurrentWarns": "0"
  },
  "Cook County": {
    "MarchEmployed": "7,826",
    "CumClaims": "2,032",
    "Employed": "5,794",
    "Unemployed": "2,365",
    "PctChngEmployed": "-26.0%",
    "LaborForce": "8,159",
    "Rate": "29.0%",
    "CurrentWarns": "0"
  },
  "Burke County": {
    "MarchEmployed": "8,744",
    "CumClaims": "2,324",
    "Employed": "6,420",
    "Unemployed": "2,852",
    "PctChngEmployed": "-26.6%",
    "LaborForce": "9,272",
    "Rate": "30.8%",
    "CurrentWarns": "0"
  },
  "Lamar County": {
    "MarchEmployed": "7,915",
    "CumClaims": "2,284",
    "Employed": "5,631",
    "Unemployed": "2,712",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "8,343",
    "Rate": "32.5%",
    "CurrentWarns": "0"
  },
  "Emanuel County": {
    "MarchEmployed": "7,879",
    "CumClaims": "1,809",
    "Employed": "6,070",
    "Unemployed": "2,350",
    "PctChngEmployed": "-23.0%",
    "LaborForce": "8,420",
    "Rate": "27.9%",
    "CurrentWarns": "0"
  },
  "Long County": {
    "MarchEmployed": "7,910",
    "CumClaims": "1,636",
    "Employed": "6,274",
    "Unemployed": "2,000",
    "PctChngEmployed": "-20.7%",
    "LaborForce": "8,274",
    "Rate": "24.2%",
    "CurrentWarns": "0"
  },
  "Pierce County": {
    "MarchEmployed": "8,409",
    "CumClaims": "2,025",
    "Employed": "6,384",
    "Unemployed": "2,367",
    "PctChngEmployed": "-24.1%",
    "LaborForce": "8,751",
    "Rate": "27.0%",
    "CurrentWarns": "0"
  },
  "Appling County": {
    "MarchEmployed": "9,306",
    "CumClaims": "1,881",
    "Employed": "7,425",
    "Unemployed": "2,311",
    "PctChngEmployed": "-20.2%",
    "LaborForce": "9,736",
    "Rate": "23.7%",
    "CurrentWarns": "0"
  },
  "Grady County": {
    "MarchEmployed": "10,082",
    "CumClaims": "1,961",
    "Employed": "8,121",
    "Unemployed": "2,391",
    "PctChngEmployed": "-19.5%",
    "LaborForce": "10,512",
    "Rate": "22.7%",
    "CurrentWarns": "0"
  },
  "Jeff Davis County": {
    "MarchEmployed": "5,724",
    "CumClaims": "1,429",
    "Employed": "4,295",
    "Unemployed": "1,775",
    "PctChngEmployed": "-25.0%",
    "LaborForce": "6,070",
    "Rate": "29.2%",
    "CurrentWarns": "0"
  },
  "Towns County": {
    "MarchEmployed": "3,662",
    "CumClaims": "1,415",
    "Employed": "2,247",
    "Unemployed": "1,659",
    "PctChngEmployed": "-38.6%",
    "LaborForce": "3,906",
    "Rate": "42.5%",
    "CurrentWarns": "1"
  },
  "Jasper County": {
    "MarchEmployed": "6,746",
    "CumClaims": "1,719",
    "Employed": "5,027",
    "Unemployed": "1,990",
    "PctChngEmployed": "-25.5%",
    "LaborForce": "7,017",
    "Rate": "28.4%",
    "CurrentWarns": "0"
  },
  "McIntosh County": {
    "MarchEmployed": "5,861",
    "CumClaims": "1,729",
    "Employed": "4,132",
    "Unemployed": "2,002",
    "PctChngEmployed": "-29.5%",
    "LaborForce": "6,134",
    "Rate": "32.6%",
    "CurrentWarns": "0"
  },
  "Worth County": {
    "MarchEmployed": "8,580",
    "CumClaims": "1,732",
    "Employed": "6,848",
    "Unemployed": "2,158",
    "PctChngEmployed": "-20.2%",
    "LaborForce": "9,006",
    "Rate": "24.0%",
    "CurrentWarns": "0"
  },
  "Mitchell County": {
    "MarchEmployed": "8,160",
    "CumClaims": "1,450",
    "Employed": "6,710",
    "Unemployed": "1,953",
    "PctChngEmployed": "-17.8%",
    "LaborForce": "8,663",
    "Rate": "22.5%",
    "CurrentWarns": "0"
  },
  "Jefferson County": {
    "MarchEmployed": "6,301",
    "CumClaims": "1,583",
    "Employed": "4,718",
    "Unemployed": "1,980",
    "PctChngEmployed": "-25.1%",
    "LaborForce": "6,698",
    "Rate": "29.6%",
    "CurrentWarns": "1"
  },
  "Calhoun County": {
    "MarchEmployed": "2,220",
    "CumClaims": "1,321",
    "Employed": "899",
    "Unemployed": "1,439",
    "PctChngEmployed": "-59.5%",
    "LaborForce": "2,338",
    "Rate": "61.5%",
    "CurrentWarns": "0"
  },
  "Heard County": {
    "MarchEmployed": "5,090",
    "CumClaims": "1,538",
    "Employed": "3,552",
    "Unemployed": "1,782",
    "PctChngEmployed": "-30.2%",
    "LaborForce": "5,334",
    "Rate": "33.4%",
    "CurrentWarns": "0"
  },
  "Tattnall County": {
    "MarchEmployed": "9,218",
    "CumClaims": "1,411",
    "Employed": "7,807",
    "Unemployed": "1,897",
    "PctChngEmployed": "-15.3%",
    "LaborForce": "9,704",
    "Rate": "19.5%",
    "CurrentWarns": "0"
  },
  "Washington County": {
    "MarchEmployed": "6,638",
    "CumClaims": "1,427",
    "Employed": "5,211",
    "Unemployed": "1,799",
    "PctChngEmployed": "-21.5%",
    "LaborForce": "7,010",
    "Rate": "25.7%",
    "CurrentWarns": "0"
  },
  "Bacon County": {
    "MarchEmployed": "4,767",
    "CumClaims": "1,224",
    "Employed": "3,543",
    "Unemployed": "1,444",
    "PctChngEmployed": "-25.7%",
    "LaborForce": "4,987",
    "Rate": "29.0%",
    "CurrentWarns": "0"
  },
  "Candler County": {
    "MarchEmployed": "5,444",
    "CumClaims": "1,216",
    "Employed": "4,228",
    "Unemployed": "1,427",
    "PctChngEmployed": "-22.3%",
    "LaborForce": "5,655",
    "Rate": "25.2%",
    "CurrentWarns": "0"
  },
  "Brooks County": {
    "MarchEmployed": "6,677",
    "CumClaims": "1,269",
    "Employed": "5,408",
    "Unemployed": "1,564",
    "PctChngEmployed": "-19.0%",
    "LaborForce": "6,972",
    "Rate": "22.4%",
    "CurrentWarns": "0"
  },
  "Crawford County": {
    "MarchEmployed": "5,411",
    "CumClaims": "1,280",
    "Employed": "4,131",
    "Unemployed": "1,519",
    "PctChngEmployed": "-23.7%",
    "LaborForce": "5,650",
    "Rate": "26.9%",
    "CurrentWarns": "1"
  },
  "Dade County": {
    "MarchEmployed": "7,964",
    "CumClaims": "1,285",
    "Employed": "6,679",
    "Unemployed": "1,607",
    "PctChngEmployed": "-16.1%",
    "LaborForce": "8,286",
    "Rate": "19.4%",
    "CurrentWarns": "0"
  },
  "Evans County": {
    "MarchEmployed": "4,700",
    "CumClaims": "1,003",
    "Employed": "3,697",
    "Unemployed": "1,238",
    "PctChngEmployed": "-21.3%",
    "LaborForce": "4,935",
    "Rate": "25.1%",
    "CurrentWarns": "0"
  },
  "Charlton County": {
    "MarchEmployed": "4,612",
    "CumClaims": "883",
    "Employed": "3,729",
    "Unemployed": "1,098",
    "PctChngEmployed": "-19.1%",
    "LaborForce": "4,827",
    "Rate": "22.7%",
    "CurrentWarns": "0"
  },
  "Montgomery County": {
    "MarchEmployed": "3,627",
    "CumClaims": "1,191",
    "Employed": "2,436",
    "Unemployed": "1,402",
    "PctChngEmployed": "-32.8%",
    "LaborForce": "3,838",
    "Rate": "36.5%",
    "CurrentWarns": "0"
  },
  "Macon County": {
    "MarchEmployed": "4,496",
    "CumClaims": "1,353",
    "Employed": "3,143",
    "Unemployed": "1,630",
    "PctChngEmployed": "-30.1%",
    "LaborForce": "4,773",
    "Rate": "34.2%",
    "CurrentWarns": "0"
  },
  "Dooly County": {
    "MarchEmployed": "4,869",
    "CumClaims": "910",
    "Employed": "3,959",
    "Unemployed": "1,145",
    "PctChngEmployed": "-18.7%",
    "LaborForce": "5,104",
    "Rate": "22.4%",
    "CurrentWarns": "0"
  },
  "Bleckley County": {
    "MarchEmployed": "4,275",
    "CumClaims": "972",
    "Employed": "3,303",
    "Unemployed": "1,260",
    "PctChngEmployed": "-22.7%",
    "LaborForce": "4,563",
    "Rate": "27.6%",
    "CurrentWarns": "0"
  },
  "Hancock County": {
    "MarchEmployed": "2,348",
    "CumClaims": "794",
    "Employed": "1,554",
    "Unemployed": "980",
    "PctChngEmployed": "-33.8%",
    "LaborForce": "2,534",
    "Rate": "38.7%",
    "CurrentWarns": "0"
  },
  "Early County": {
    "MarchEmployed": "4,277",
    "CumClaims": "711",
    "Employed": "3,566",
    "Unemployed": "940",
    "PctChngEmployed": "-16.6%",
    "LaborForce": "4,506",
    "Rate": "20.9%",
    "CurrentWarns": "0"
  },
  "Chattahoochee County": {
    "MarchEmployed": "1,895",
    "CumClaims": "786",
    "Employed": "1,109",
    "Unemployed": "904",
    "PctChngEmployed": "-41.5%",
    "LaborForce": "2,013",
    "Rate": "44.9%",
    "CurrentWarns": "1"
  },
  "Turner County": {
    "MarchEmployed": "3,022",
    "CumClaims": "921",
    "Employed": "2,101",
    "Unemployed": "1,105",
    "PctChngEmployed": "-30.5%",
    "LaborForce": "3,206",
    "Rate": "34.5%",
    "CurrentWarns": "0"
  },
  "Wilkinson County": {
    "MarchEmployed": "3,861",
    "CumClaims": "804",
    "Employed": "3,057",
    "Unemployed": "988",
    "PctChngEmployed": "-20.8%",
    "LaborForce": "4,045",
    "Rate": "24.4%",
    "CurrentWarns": "0"
  },
  "Miller County": {
    "MarchEmployed": "2,681",
    "CumClaims": "429",
    "Employed": "2,252",
    "Unemployed": "553",
    "PctChngEmployed": "-16.0%",
    "LaborForce": "2,805",
    "Rate": "19.7%",
    "CurrentWarns": "0"
  },
  "Terrell County": {
    "MarchEmployed": "3,333",
    "CumClaims": "800",
    "Employed": "2,533",
    "Unemployed": "980",
    "PctChngEmployed": "-24.0%",
    "LaborForce": "3,513",
    "Rate": "27.9%",
    "CurrentWarns": "0"
  },
  "Warren County": {
    "MarchEmployed": "2,755",
    "CumClaims": "659",
    "Employed": "2,096",
    "Unemployed": "805",
    "PctChngEmployed": "-23.9%",
    "LaborForce": "2,901",
    "Rate": "27.7%",
    "CurrentWarns": "0"
  },
  "Wilkes County": {
    "MarchEmployed": "3,625",
    "CumClaims": "703",
    "Employed": "2,922",
    "Unemployed": "953",
    "PctChngEmployed": "-19.4%",
    "LaborForce": "3,875",
    "Rate": "24.6%",
    "CurrentWarns": "0"
  },
  "Lincoln County": {
    "MarchEmployed": "3,442",
    "CumClaims": "765",
    "Employed": "2,677",
    "Unemployed": "949",
    "PctChngEmployed": "-22.2%",
    "LaborForce": "3,626",
    "Rate": "26.2%",
    "CurrentWarns": "0"
  },
  "Jenkins County": {
    "MarchEmployed": "2,941",
    "CumClaims": "701",
    "Employed": "2,240",
    "Unemployed": "907",
    "PctChngEmployed": "-23.8%",
    "LaborForce": "3,147",
    "Rate": "28.8%",
    "CurrentWarns": "0"
  },
  "Twiggs County": {
    "MarchEmployed": "2,728",
    "CumClaims": "613",
    "Employed": "2,115",
    "Unemployed": "813",
    "PctChngEmployed": "-22.5%",
    "LaborForce": "2,928",
    "Rate": "27.8%",
    "CurrentWarns": "0"
  },
  "Telfair County": {
    "MarchEmployed": "3,731",
    "CumClaims": "683",
    "Employed": "3,048",
    "Unemployed": "1,135",
    "PctChngEmployed": "-18.3%",
    "LaborForce": "4,183",
    "Rate": "27.1%",
    "CurrentWarns": "1"
  },
  "Irwin County": {
    "MarchEmployed": "3,230",
    "CumClaims": "672",
    "Employed": "2,558",
    "Unemployed": "874",
    "PctChngEmployed": "-20.8%",
    "LaborForce": "3,432",
    "Rate": "25.5%",
    "CurrentWarns": "0"
  },
  "Marion County": {
    "MarchEmployed": "3,132",
    "CumClaims": "653",
    "Employed": "2,479",
    "Unemployed": "835",
    "PctChngEmployed": "-20.8%",
    "LaborForce": "3,314",
    "Rate": "25.2%",
    "CurrentWarns": "0"
  },
  "Talbot County": {
    "MarchEmployed": "2,660",
    "CumClaims": "579",
    "Employed": "2,081",
    "Unemployed": "717",
    "PctChngEmployed": "-21.8%",
    "LaborForce": "2,798",
    "Rate": "25.6%",
    "CurrentWarns": "0"
  },
  "Clay County": {
    "MarchEmployed": "828",
    "CumClaims": "673",
    "Employed": "155",
    "Unemployed": "742",
    "PctChngEmployed": "-81.3%",
    "LaborForce": "897",
    "Rate": "82.7%",
    "CurrentWarns": "1"
  },
  "Lanier County": {
    "MarchEmployed": "3,568",
    "CumClaims": "665",
    "Employed": "2,903",
    "Unemployed": "847",
    "PctChngEmployed": "-18.6%",
    "LaborForce": "3,750",
    "Rate": "22.6%",
    "CurrentWarns": "0"
  },
  "Randolph County": {
    "MarchEmployed": "2,441",
    "CumClaims": "1,122",
    "Employed": "1,319",
    "Unemployed": "1,268",
    "PctChngEmployed": "-46.0%",
    "LaborForce": "2,587",
    "Rate": "49.0%",
    "CurrentWarns": "0"
  },
  "Seminole County": {
    "MarchEmployed": "2,915",
    "CumClaims": "619",
    "Employed": "2,296",
    "Unemployed": "788",
    "PctChngEmployed": "-21.2%",
    "LaborForce": "3,084",
    "Rate": "25.6%",
    "CurrentWarns": "0"
  },
  "Taylor County": {
    "MarchEmployed": "3,135",
    "CumClaims": "707",
    "Employed": "2,428",
    "Unemployed": "842",
    "PctChngEmployed": "-22.6%",
    "LaborForce": "3,270",
    "Rate": "25.7%",
    "CurrentWarns": "0"
  },
  "Johnson County": {
    "MarchEmployed": "3,837",
    "CumClaims": "638",
    "Employed": "3,199",
    "Unemployed": "831",
    "PctChngEmployed": "-16.6%",
    "LaborForce": "4,030",
    "Rate": "20.6%",
    "CurrentWarns": "0"
  },
  "Pulaski County": {
    "MarchEmployed": "3,907",
    "CumClaims": "728",
    "Employed": "3,179",
    "Unemployed": "917",
    "PctChngEmployed": "-18.6%",
    "LaborForce": "4,096",
    "Rate": "22.4%",
    "CurrentWarns": "0"
  },
  "Wilcox County": {
    "MarchEmployed": "2,589",
    "CumClaims": "411",
    "Employed": "2,178",
    "Unemployed": "573",
    "PctChngEmployed": "-15.9%",
    "LaborForce": "2,751",
    "Rate": "20.8%",
    "CurrentWarns": "0"
  },
  "Echols County": {
    "MarchEmployed": "1,880",
    "CumClaims": "386",
    "Employed": "1,494",
    "Unemployed": "461",
    "PctChngEmployed": "-20.5%",
    "LaborForce": "1,955",
    "Rate": "23.6%",
    "CurrentWarns": "0"
  },
  "Treutlen County": {
    "MarchEmployed": "2,494",
    "CumClaims": "538",
    "Employed": "1,956",
    "Unemployed": "704",
    "PctChngEmployed": "-21.6%",
    "LaborForce": "2,660",
    "Rate": "26.5%",
    "CurrentWarns": "0"
  },
  "Glascock County": {
    "MarchEmployed": "1,231",
    "CumClaims": "325",
    "Employed": "906",
    "Unemployed": "389",
    "PctChngEmployed": "-26.4%",
    "LaborForce": "1,295",
    "Rate": "30.0%",
    "CurrentWarns": "0"
  },
  "Wheeler County": {
    "MarchEmployed": "1,504",
    "CumClaims": "328",
    "Employed": "1,176",
    "Unemployed": "477",
    "PctChngEmployed": "-21.8%",
    "LaborForce": "1,653",
    "Rate": "28.9%",
    "CurrentWarns": "0"
  },
  "Baker County": {
    "MarchEmployed": "1,133",
    "CumClaims": "388",
    "Employed": "745",
    "Unemployed": "452",
    "PctChngEmployed": "-34.2%",
    "LaborForce": "1,197",
    "Rate": "37.8%",
    "CurrentWarns": "0"
  },
  "Schley County": {
    "MarchEmployed": "2,133",
    "CumClaims": "262",
    "Employed": "1,871",
    "Unemployed": "360",
    "PctChngEmployed": "-12.3%",
    "LaborForce": "2,231",
    "Rate": "16.1%",
    "CurrentWarns": "0"
  },
  "Stewart County": {
    "MarchEmployed": "2,322",
    "CumClaims": "308",
    "Employed": "2,014",
    "Unemployed": "432",
    "PctChngEmployed": "-13.3%",
    "LaborForce": "2,446",
    "Rate": "17.7%",
    "CurrentWarns": "0"
  },
  "Webster County": {
    "MarchEmployed": "973",
    "CumClaims": "119",
    "Employed": "854",
    "Unemployed": "183",
    "PctChngEmployed": "-12.2%",
    "LaborForce": "1,037",
    "Rate": "17.6%",
    "CurrentWarns": "0"
  },
  "Taliaferro County": {
    "MarchEmployed": "532",
    "CumClaims": "150",
    "Employed": "382",
    "Unemployed": "188",
    "PctChngEmployed": "-28.2%",
    "LaborForce": "570",
    "Rate": "33.0%",
    "CurrentWarns": "0"
  },
  "Quitman County": {
    "MarchEmployed": "752",
    "CumClaims": "60",
    "Employed": "692",
    "Unemployed": "109",
    "PctChngEmployed": "-8.0%",
    "LaborForce": "801",
    "Rate": "13.6%",
    "CurrentWarns": "0"
  },
  "Eufaula, AL-GA": {
    "MarchEmployed": "752",
    "CumClaims": "60",
    "Employed": "692",
    "Unemployed": "109",
    "PctChngEmployed": "-8.0%",
    "LaborForce": "801",
    "Rate": "13.6%",
    "CurrentWarns": "0"
  }
}
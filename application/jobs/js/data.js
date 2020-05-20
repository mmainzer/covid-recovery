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
    "MarchEmployed": "4.94M",
    "CumClaims": "1.79M",
    "Employed": "3.14M",
    "Unemployed": "2.02M",
    "PctChngEmployed": "-36.3%",
    "LaborForce": "5.16M",
    "Rate": "39.1%",
    "CurrentWarns": "320"
  },
  "Atlanta-Sandy Springs-Alpharetta, GA": {
    "MarchEmployed": "3M",
    "CumClaims": "1.14M",
    "Employed": "1.86M",
    "Unemployed": "1.27M",
    "PctChngEmployed": "-38.0%",
    "LaborForce": "3.13M",
    "Rate": "40.5%",
    "CurrentWarns": "206"
  },
  "ARC": {
    "MarchEmployed": "2.36M",
    "CumClaims": "922K",
    "Employed": "1.44M",
    "Unemployed": "1.03M",
    "PctChngEmployed": "-39.0%",
    "LaborForce": "2.46M",
    "Rate": "41.6%",
    "CurrentWarns": "181"
  },
  "Fulton County": {
    "MarchEmployed": "539K",
    "CumClaims": "240K",
    "Employed": "298K",
    "Unemployed": "266K",
    "PctChngEmployed": "-44.6%",
    "LaborForce": "564K",
    "Rate": "47.1%",
    "CurrentWarns": "77"
  },
  "Gwinnett County": {
    "MarchEmployed": "475K",
    "CumClaims": "176K",
    "Employed": "299K",
    "Unemployed": "196K",
    "PctChngEmployed": "-37.1%",
    "LaborForce": "494K",
    "Rate": "39.5%",
    "CurrentWarns": "21"
  },
  "Northwest": {
    "MarchEmployed": "406K",
    "CumClaims": "153K",
    "Employed": "253K",
    "Unemployed": "171K",
    "PctChngEmployed": "-37.7%",
    "LaborForce": "424K",
    "Rate": "40.4%",
    "CurrentWarns": "18"
  },
  "DeKalb County": {
    "MarchEmployed": "386K",
    "CumClaims": "144K",
    "Employed": "242K",
    "Unemployed": "162K",
    "PctChngEmployed": "-37.3%",
    "LaborForce": "404K",
    "Rate": "40.0%",
    "CurrentWarns": "20"
  },
  "Cobb County": {
    "MarchEmployed": "413K",
    "CumClaims": "136K",
    "Employed": "277K",
    "Unemployed": "152K",
    "PctChngEmployed": "-32.9%",
    "LaborForce": "430K",
    "Rate": "35.4%",
    "CurrentWarns": "30"
  },
  "Coastal": {
    "MarchEmployed": "317K",
    "CumClaims": "131K",
    "Employed": "186K",
    "Unemployed": "145K",
    "PctChngEmployed": "-41.3%",
    "LaborForce": "332K",
    "Rate": "43.9%",
    "CurrentWarns": "28"
  },
  "Northeast": {
    "MarchEmployed": "294K",
    "CumClaims": "103K",
    "Employed": "191K",
    "Unemployed": "116K",
    "PctChngEmployed": "-35.0%",
    "LaborForce": "307K",
    "Rate": "37.7%",
    "CurrentWarns": "12"
  },
  "Georgia Mountains": {
    "MarchEmployed": "341K",
    "CumClaims": "104K",
    "Employed": "237K",
    "Unemployed": "117K",
    "PctChngEmployed": "-30.4%",
    "LaborForce": "354K",
    "Rate": "33.0%",
    "CurrentWarns": "17"
  },
  "Three Rivers": {
    "MarchEmployed": "241K",
    "CumClaims": "88K",
    "Employed": "153K",
    "Unemployed": "98.9K",
    "PctChngEmployed": "-36.5%",
    "LaborForce": "252K",
    "Rate": "39.2%",
    "CurrentWarns": "10"
  },
  "Savannah, GA": {
    "MarchEmployed": "181K",
    "CumClaims": "82.1K",
    "Employed": "98.9K",
    "Unemployed": "90K",
    "PctChngEmployed": "-45.4%",
    "LaborForce": "189K",
    "Rate": "47.6%",
    "CurrentWarns": "21"
  },
  "Middle Georgia": {
    "MarchEmployed": "211K",
    "CumClaims": "63.9K",
    "Employed": "147K",
    "Unemployed": "74K",
    "PctChngEmployed": "-30.3%",
    "LaborForce": "221K",
    "Rate": "33.5%",
    "CurrentWarns": "15"
  },
  "Clayton County": {
    "MarchEmployed": "132K",
    "CumClaims": "63K",
    "Employed": "69.3K",
    "Unemployed": "70.6K",
    "PctChngEmployed": "-47.6%",
    "LaborForce": "140K",
    "Rate": "50.4%",
    "CurrentWarns": "14"
  },
  "Chatham County": {
    "MarchEmployed": "134K",
    "CumClaims": "66.1K",
    "Employed": "67.6K",
    "Unemployed": "72.1K",
    "PctChngEmployed": "-49.5%",
    "LaborForce": "140K",
    "Rate": "51.6%",
    "CurrentWarns": "21"
  },
  "Henry County": {
    "MarchEmployed": "112K",
    "CumClaims": "50K",
    "Employed": "61.8K",
    "Unemployed": "55.2K",
    "PctChngEmployed": "-44.7%",
    "LaborForce": "117K",
    "Rate": "47.2%",
    "CurrentWarns": "4"
  },
  "Southern": {
    "MarchEmployed": "172K",
    "CumClaims": "57.3K",
    "Employed": "115K",
    "Unemployed": "65.7K",
    "PctChngEmployed": "-33.3%",
    "LaborForce": "180K",
    "Rate": "36.4%",
    "CurrentWarns": "2"
  },
  "CSRA": {
    "MarchEmployed": "201K",
    "CumClaims": "56.5K",
    "Employed": "145K",
    "Unemployed": "66.9K",
    "PctChngEmployed": "-28.1%",
    "LaborForce": "212K",
    "Rate": "31.6%",
    "CurrentWarns": "19"
  },
  "River Valley": {
    "MarchEmployed": "140K",
    "CumClaims": "47K",
    "Employed": "93K",
    "Unemployed": "54.7K",
    "PctChngEmployed": "-33.6%",
    "LaborForce": "148K",
    "Rate": "37.0%",
    "CurrentWarns": "11"
  },
  "Augusta-Richmond County, GA-SC": {
    "MarchEmployed": "175K",
    "CumClaims": "50.2K",
    "Employed": "125K",
    "Unemployed": "58.9K",
    "PctChngEmployed": "-28.7%",
    "LaborForce": "184K",
    "Rate": "32.1%",
    "CurrentWarns": "18"
  },
  "Cherokee County": {
    "MarchEmployed": "132K",
    "CumClaims": "43.1K",
    "Employed": "89.2K",
    "Unemployed": "47.8K",
    "PctChngEmployed": "-32.6%",
    "LaborForce": "137K",
    "Rate": "34.9%",
    "CurrentWarns": "4"
  },
  "Dalton, GA": {
    "MarchEmployed": "55.6K",
    "CumClaims": "35.2K",
    "Employed": "20.4K",
    "Unemployed": "38.2K",
    "PctChngEmployed": "-63.2%",
    "LaborForce": "58.6K",
    "Rate": "65.1%",
    "CurrentWarns": "7"
  },
  "Southwest": {
    "MarchEmployed": "142K",
    "CumClaims": "41.7K",
    "Employed": "100K",
    "Unemployed": "48.9K",
    "PctChngEmployed": "-29.4%",
    "LaborForce": "149K",
    "Rate": "32.8%",
    "CurrentWarns": "3"
  },
  "Columbus, GA-AL": {
    "MarchEmployed": "99.1K",
    "CumClaims": "35K",
    "Employed": "64.1K",
    "Unemployed": "40.3K",
    "PctChngEmployed": "-35.3%",
    "LaborForce": "104K",
    "Rate": "38.6%",
    "CurrentWarns": "6"
  },
  "Athens-Clarke County, GA": {
    "MarchEmployed": "95K",
    "CumClaims": "32.8K",
    "Employed": "62.2K",
    "Unemployed": "37K",
    "PctChngEmployed": "-34.5%",
    "LaborForce": "99.2K",
    "Rate": "37.3%",
    "CurrentWarns": "6"
  },
  "Forsyth County": {
    "MarchEmployed": "119K",
    "CumClaims": "33.2K",
    "Employed": "85.8K",
    "Unemployed": "37.4K",
    "PctChngEmployed": "-27.9%",
    "LaborForce": "123K",
    "Rate": "30.4%",
    "CurrentWarns": "6"
  },
  "Douglas County": {
    "MarchEmployed": "70.8K",
    "CumClaims": "28.4K",
    "Employed": "42.3K",
    "Unemployed": "31.8K",
    "PctChngEmployed": "-40.2%",
    "LaborForce": "74.1K",
    "Rate": "42.9%",
    "CurrentWarns": "5"
  },
  "Macon-Bibb County, GA": {
    "MarchEmployed": "99K",
    "CumClaims": "30.4K",
    "Employed": "68.7K",
    "Unemployed": "35.2K",
    "PctChngEmployed": "-30.7%",
    "LaborForce": "104K",
    "Rate": "33.9%",
    "CurrentWarns": "9"
  },
  "Whitfield County": {
    "MarchEmployed": "41.1K",
    "CumClaims": "26.6K",
    "Employed": "14.5K",
    "Unemployed": "28.7K",
    "PctChngEmployed": "-64.7%",
    "LaborForce": "43.2K",
    "Rate": "66.5%",
    "CurrentWarns": "6"
  },
  "Muscogee County": {
    "MarchEmployed": "73.1K",
    "CumClaims": "28K",
    "Employed": "45.1K",
    "Unemployed": "32.2K",
    "PctChngEmployed": "-38.3%",
    "LaborForce": "77.3K",
    "Rate": "41.7%",
    "CurrentWarns": "5"
  },
  "Hall County": {
    "MarchEmployed": "99.4K",
    "CumClaims": "31.1K",
    "Employed": "68.3K",
    "Unemployed": "34.6K",
    "PctChngEmployed": "-31.3%",
    "LaborForce": "103K",
    "Rate": "33.6%",
    "CurrentWarns": "6"
  },
  "Gainesville, GA": {
    "MarchEmployed": "99.4K",
    "CumClaims": "31.1K",
    "Employed": "68.3K",
    "Unemployed": "34.6K",
    "PctChngEmployed": "-31.3%",
    "LaborForce": "103K",
    "Rate": "33.6%",
    "CurrentWarns": "6"
  },
  "Fayette County": {
    "MarchEmployed": "56.4K",
    "CumClaims": "23.8K",
    "Employed": "32.6K",
    "Unemployed": "25.9K",
    "PctChngEmployed": "-42.1%",
    "LaborForce": "58.6K",
    "Rate": "44.3%",
    "CurrentWarns": "5"
  },
  "Heart of Georgia": {
    "MarchEmployed": "111K",
    "CumClaims": "27.2K",
    "Employed": "83.6K",
    "Unemployed": "34K",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "118K",
    "Rate": "28.9%",
    "CurrentWarns": "3"
  },
  "Coweta County": {
    "MarchEmployed": "72.6K",
    "CumClaims": "26.4K",
    "Employed": "46.2K",
    "Unemployed": "29.2K",
    "PctChngEmployed": "-36.4%",
    "LaborForce": "75.4K",
    "Rate": "38.8%",
    "CurrentWarns": "5"
  },
  "Brunswick, GA": {
    "MarchEmployed": "49.9K",
    "CumClaims": "21.1K",
    "Employed": "28.8K",
    "Unemployed": "23.3K",
    "PctChngEmployed": "-42.2%",
    "LaborForce": "52.1K",
    "Rate": "44.7%",
    "CurrentWarns": "4"
  },
  "Richmond County": {
    "MarchEmployed": "81.4K",
    "CumClaims": "27.2K",
    "Employed": "54.2K",
    "Unemployed": "31.8K",
    "PctChngEmployed": "-33.4%",
    "LaborForce": "86K",
    "Rate": "37.0%",
    "CurrentWarns": "11"
  },
  "Bibb County": {
    "MarchEmployed": "65.1K",
    "CumClaims": "22.9K",
    "Employed": "42.2K",
    "Unemployed": "26.2K",
    "PctChngEmployed": "-35.2%",
    "LaborForce": "68.4K",
    "Rate": "38.3%",
    "CurrentWarns": "8"
  },
  "Warner Robins, GA": {
    "MarchEmployed": "79.4K",
    "CumClaims": "23.3K",
    "Employed": "56.1K",
    "Unemployed": "26.8K",
    "PctChngEmployed": "-29.4%",
    "LaborForce": "82.9K",
    "Rate": "32.3%",
    "CurrentWarns": "6"
  },
  "Bartow County": {
    "MarchEmployed": "49K",
    "CumClaims": "22.3K",
    "Employed": "26.8K",
    "Unemployed": "24.4K",
    "PctChngEmployed": "-45.4%",
    "LaborForce": "51.2K",
    "Rate": "47.7%",
    "CurrentWarns": "5"
  },
  "Glynn County": {
    "MarchEmployed": "37.2K",
    "CumClaims": "17.2K",
    "Employed": "20K",
    "Unemployed": "18.9K",
    "PctChngEmployed": "-46.3%",
    "LaborForce": "38.8K",
    "Rate": "48.6%",
    "CurrentWarns": "4"
  },
  "Clarke County": {
    "MarchEmployed": "56.6K",
    "CumClaims": "21.9K",
    "Employed": "34.8K",
    "Unemployed": "24.6K",
    "PctChngEmployed": "-38.6%",
    "LaborForce": "59.4K",
    "Rate": "41.5%",
    "CurrentWarns": "5"
  },
  "Paulding County": {
    "MarchEmployed": "83.6K",
    "CumClaims": "23.5K",
    "Employed": "60.1K",
    "Unemployed": "26.8K",
    "PctChngEmployed": "-28.1%",
    "LaborForce": "86.9K",
    "Rate": "30.8%",
    "CurrentWarns": "2"
  },
  "Albany, GA": {
    "MarchEmployed": "62.6K",
    "CumClaims": "22.5K",
    "Employed": "40.1K",
    "Unemployed": "26K",
    "PctChngEmployed": "-35.9%",
    "LaborForce": "66.1K",
    "Rate": "39.3%",
    "CurrentWarns": "3"
  },
  "Houston County": {
    "MarchEmployed": "68K",
    "CumClaims": "19.4K",
    "Employed": "48.6K",
    "Unemployed": "22.3K",
    "PctChngEmployed": "-28.5%",
    "LaborForce": "71K",
    "Rate": "31.5%",
    "CurrentWarns": "4"
  },
  "Rockdale County": {
    "MarchEmployed": "43.1K",
    "CumClaims": "16.5K",
    "Employed": "26.6K",
    "Unemployed": "18.7K",
    "PctChngEmployed": "-38.3%",
    "LaborForce": "45.3K",
    "Rate": "41.3%",
    "CurrentWarns": "1"
  },
  "Newton County": {
    "MarchEmployed": "50.3K",
    "CumClaims": "18.2K",
    "Employed": "32.1K",
    "Unemployed": "20.8K",
    "PctChngEmployed": "-36.2%",
    "LaborForce": "52.9K",
    "Rate": "39.3%",
    "CurrentWarns": "2"
  },
  "Valdosta, GA": {
    "MarchEmployed": "61.1K",
    "CumClaims": "18.5K",
    "Employed": "42.6K",
    "Unemployed": "21.4K",
    "PctChngEmployed": "-30.3%",
    "LaborForce": "63.9K",
    "Rate": "33.4%",
    "CurrentWarns": "1"
  },
  "Walton County": {
    "MarchEmployed": "44.7K",
    "CumClaims": "16K",
    "Employed": "28.7K",
    "Unemployed": "17.8K",
    "PctChngEmployed": "-35.8%",
    "LaborForce": "46.6K",
    "Rate": "38.3%",
    "CurrentWarns": "0"
  },
  "Carroll County": {
    "MarchEmployed": "53.4K",
    "CumClaims": "19.1K",
    "Employed": "34.3K",
    "Unemployed": "21.7K",
    "PctChngEmployed": "-35.7%",
    "LaborForce": "56K",
    "Rate": "38.7%",
    "CurrentWarns": "3"
  },
  "Rome, GA": {
    "MarchEmployed": "42.5K",
    "CumClaims": "17.4K",
    "Employed": "25.1K",
    "Unemployed": "19.4K",
    "PctChngEmployed": "-41.0%",
    "LaborForce": "44.5K",
    "Rate": "43.6%",
    "CurrentWarns": "2"
  },
  "Floyd County": {
    "MarchEmployed": "42.5K",
    "CumClaims": "17.4K",
    "Employed": "25.1K",
    "Unemployed": "19.4K",
    "PctChngEmployed": "-41.0%",
    "LaborForce": "44.5K",
    "Rate": "43.6%",
    "CurrentWarns": "2"
  },
  "Columbia County": {
    "MarchEmployed": "72.9K",
    "CumClaims": "17.1K",
    "Employed": "55.8K",
    "Unemployed": "19.9K",
    "PctChngEmployed": "-23.4%",
    "LaborForce": "75.7K",
    "Rate": "26.3%",
    "CurrentWarns": "6"
  },
  "Lowndes County": {
    "MarchEmployed": "48.9K",
    "CumClaims": "16.2K",
    "Employed": "32.7K",
    "Unemployed": "18.5K",
    "PctChngEmployed": "-33.1%",
    "LaborForce": "51.2K",
    "Rate": "36.1%",
    "CurrentWarns": "1"
  },
  "Barrow County": {
    "MarchEmployed": "39.4K",
    "CumClaims": "14.3K",
    "Employed": "25.1K",
    "Unemployed": "15.8K",
    "PctChngEmployed": "-36.3%",
    "LaborForce": "40.8K",
    "Rate": "38.6%",
    "CurrentWarns": "0"
  },
  "Gordon County": {
    "MarchEmployed": "27.1K",
    "CumClaims": "11.4K",
    "Employed": "15.7K",
    "Unemployed": "12.5K",
    "PctChngEmployed": "-42.0%",
    "LaborForce": "28.2K",
    "Rate": "44.3%",
    "CurrentWarns": "0"
  },
  "Calhoun, GA": {
    "MarchEmployed": "27.1K",
    "CumClaims": "11.4K",
    "Employed": "15.7K",
    "Unemployed": "12.5K",
    "PctChngEmployed": "-42.0%",
    "LaborForce": "28.2K",
    "Rate": "44.3%",
    "CurrentWarns": "0"
  },
  "LaGrange, GA-AL": {
    "MarchEmployed": "36.2K",
    "CumClaims": "14.9K",
    "Employed": "21.2K",
    "Unemployed": "16.4K",
    "PctChngEmployed": "-41.3%",
    "LaborForce": "37.6K",
    "Rate": "43.6%",
    "CurrentWarns": "1"
  },
  "Troup County": {
    "MarchEmployed": "36.2K",
    "CumClaims": "14.9K",
    "Employed": "21.2K",
    "Unemployed": "16.4K",
    "PctChngEmployed": "-41.3%",
    "LaborForce": "37.6K",
    "Rate": "43.6%",
    "CurrentWarns": "1"
  },
  "Statesboro, GA": {
    "MarchEmployed": "35K",
    "CumClaims": "12.5K",
    "Employed": "22.5K",
    "Unemployed": "14.5K",
    "PctChngEmployed": "-35.7%",
    "LaborForce": "37K",
    "Rate": "39.1%",
    "CurrentWarns": "0"
  },
  "Bulloch County": {
    "MarchEmployed": "35K",
    "CumClaims": "12.5K",
    "Employed": "22.5K",
    "Unemployed": "14.5K",
    "PctChngEmployed": "-35.7%",
    "LaborForce": "37K",
    "Rate": "39.1%",
    "CurrentWarns": "0"
  },
  "Chattanooga, TN-GA": {
    "MarchEmployed": "71.3K",
    "CumClaims": "14.4K",
    "Employed": "57K",
    "Unemployed": "17.2K",
    "PctChngEmployed": "-20.2%",
    "LaborForce": "74.2K",
    "Rate": "23.2%",
    "CurrentWarns": "0"
  },
  "Dougherty County": {
    "MarchEmployed": "36.5K",
    "CumClaims": "13.3K",
    "Employed": "23.2K",
    "Unemployed": "15.6K",
    "PctChngEmployed": "-36.5%",
    "LaborForce": "38.7K",
    "Rate": "40.2%",
    "CurrentWarns": "3"
  },
  "Jefferson, GA": {
    "MarchEmployed": "35.3K",
    "CumClaims": "12.3K",
    "Employed": "23.1K",
    "Unemployed": "13.5K",
    "PctChngEmployed": "-34.7%",
    "LaborForce": "36.6K",
    "Rate": "36.9%",
    "CurrentWarns": "3"
  },
  "Jackson County": {
    "MarchEmployed": "35.3K",
    "CumClaims": "12.3K",
    "Employed": "23.1K",
    "Unemployed": "13.5K",
    "PctChngEmployed": "-34.7%",
    "LaborForce": "36.6K",
    "Rate": "36.9%",
    "CurrentWarns": "3"
  },
  "Hinesville, GA": {
    "MarchEmployed": "33.2K",
    "CumClaims": "9.6K",
    "Employed": "23.6K",
    "Unemployed": "11.2K",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "34.8K",
    "Rate": "32.3%",
    "CurrentWarns": "2"
  },
  "Murray County": {
    "MarchEmployed": "14.5K",
    "CumClaims": "8.59K",
    "Employed": "5.96K",
    "Unemployed": "9.47K",
    "PctChngEmployed": "-59.0%",
    "LaborForce": "15.4K",
    "Rate": "61.4%",
    "CurrentWarns": "1"
  },
  "Spalding County": {
    "MarchEmployed": "27.6K",
    "CumClaims": "10K",
    "Employed": "17.6K",
    "Unemployed": "11.6K",
    "PctChngEmployed": "-36.4%",
    "LaborForce": "29.1K",
    "Rate": "39.7%",
    "CurrentWarns": "0"
  },
  "Liberty County": {
    "MarchEmployed": "25.3K",
    "CumClaims": "7.97K",
    "Employed": "17.3K",
    "Unemployed": "9.24K",
    "PctChngEmployed": "-31.5%",
    "LaborForce": "26.5K",
    "Rate": "34.8%",
    "CurrentWarns": "2"
  },
  "Douglas, GA": {
    "MarchEmployed": "23K",
    "CumClaims": "9.62K",
    "Employed": "13.4K",
    "Unemployed": "10.8K",
    "PctChngEmployed": "-41.7%",
    "LaborForce": "24.2K",
    "Rate": "44.6%",
    "CurrentWarns": "0"
  },
  "Effingham County": {
    "MarchEmployed": "29.7K",
    "CumClaims": "8.77K",
    "Employed": "21K",
    "Unemployed": "9.94K",
    "PctChngEmployed": "-29.5%",
    "LaborForce": "30.9K",
    "Rate": "32.1%",
    "CurrentWarns": "0"
  },
  "Cedartown, GA": {
    "MarchEmployed": "17.7K",
    "CumClaims": "6.69K",
    "Employed": "11K",
    "Unemployed": "7.57K",
    "PctChngEmployed": "-37.8%",
    "LaborForce": "18.6K",
    "Rate": "40.7%",
    "CurrentWarns": "0"
  },
  "Polk County": {
    "MarchEmployed": "17.7K",
    "CumClaims": "6.69K",
    "Employed": "11K",
    "Unemployed": "7.57K",
    "PctChngEmployed": "-37.8%",
    "LaborForce": "18.6K",
    "Rate": "40.7%",
    "CurrentWarns": "0"
  },
  "Dublin, GA": {
    "MarchEmployed": "24.3K",
    "CumClaims": "6.78K",
    "Employed": "17.5K",
    "Unemployed": "8.36K",
    "PctChngEmployed": "-27.9%",
    "LaborForce": "25.9K",
    "Rate": "32.3%",
    "CurrentWarns": "1"
  },
  "Walker County": {
    "MarchEmployed": "30.6K",
    "CumClaims": "7.52K",
    "Employed": "23K",
    "Unemployed": "8.8K",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "31.8K",
    "Rate": "27.7%",
    "CurrentWarns": "0"
  },
  "Lee County": {
    "MarchEmployed": "14.2K",
    "CumClaims": "6.67K",
    "Employed": "7.58K",
    "Unemployed": "7.25K",
    "PctChngEmployed": "-46.8%",
    "LaborForce": "14.8K",
    "Rate": "48.9%",
    "CurrentWarns": "0"
  },
  "Bryan County": {
    "MarchEmployed": "17.6K",
    "CumClaims": "7.23K",
    "Employed": "10.3K",
    "Unemployed": "7.96K",
    "PctChngEmployed": "-41.1%",
    "LaborForce": "18.3K",
    "Rate": "43.5%",
    "CurrentWarns": "0"
  },
  "Camden County": {
    "MarchEmployed": "20K",
    "CumClaims": "5.6K",
    "Employed": "14.4K",
    "Unemployed": "6.53K",
    "PctChngEmployed": "-28.0%",
    "LaborForce": "20.9K",
    "Rate": "31.3%",
    "CurrentWarns": "1"
  },
  "St. Marys, GA": {
    "MarchEmployed": "20K",
    "CumClaims": "5.6K",
    "Employed": "14.4K",
    "Unemployed": "6.53K",
    "PctChngEmployed": "-28.0%",
    "LaborForce": "20.9K",
    "Rate": "31.3%",
    "CurrentWarns": "1"
  },
  "Milledgeville, GA": {
    "MarchEmployed": "19.1K",
    "CumClaims": "6.49K",
    "Employed": "12.6K",
    "Unemployed": "7.67K",
    "PctChngEmployed": "-34.0%",
    "LaborForce": "20.3K",
    "Rate": "37.8%",
    "CurrentWarns": "0"
  },
  "Summerville, GA": {
    "MarchEmployed": "9.74K",
    "CumClaims": "4.98K",
    "Employed": "4.76K",
    "Unemployed": "5.57K",
    "PctChngEmployed": "-51.1%",
    "LaborForce": "10.3K",
    "Rate": "53.9%",
    "CurrentWarns": "1"
  },
  "Chattooga County": {
    "MarchEmployed": "9.74K",
    "CumClaims": "4.98K",
    "Employed": "4.76K",
    "Unemployed": "5.57K",
    "PctChngEmployed": "-51.1%",
    "LaborForce": "10.3K",
    "Rate": "53.9%",
    "CurrentWarns": "1"
  },
  "Laurens County": {
    "MarchEmployed": "18K",
    "CumClaims": "5.6K",
    "Employed": "12.4K",
    "Unemployed": "6.82K",
    "PctChngEmployed": "-31.2%",
    "LaborForce": "19.2K",
    "Rate": "35.6%",
    "CurrentWarns": "1"
  },
  "Catoosa County": {
    "MarchEmployed": "32.8K",
    "CumClaims": "5.57K",
    "Employed": "27.2K",
    "Unemployed": "6.8K",
    "PctChngEmployed": "-17.0%",
    "LaborForce": "34K",
    "Rate": "20.0%",
    "CurrentWarns": "0"
  },
  "Oconee County": {
    "MarchEmployed": "18.9K",
    "CumClaims": "4.91K",
    "Employed": "14K",
    "Unemployed": "5.54K",
    "PctChngEmployed": "-26.0%",
    "LaborForce": "19.5K",
    "Rate": "28.4%",
    "CurrentWarns": "1"
  },
  "Butts County": {
    "MarchEmployed": "10.4K",
    "CumClaims": "4.21K",
    "Employed": "6.2K",
    "Unemployed": "4.68K",
    "PctChngEmployed": "-40.4%",
    "LaborForce": "10.9K",
    "Rate": "43.0%",
    "CurrentWarns": "0"
  },
  "Baldwin County": {
    "MarchEmployed": "16.7K",
    "CumClaims": "5.69K",
    "Employed": "11K",
    "Unemployed": "6.69K",
    "PctChngEmployed": "-34.0%",
    "LaborForce": "17.7K",
    "Rate": "37.7%",
    "CurrentWarns": "0"
  },
  "Pickens County": {
    "MarchEmployed": "14.8K",
    "CumClaims": "4.56K",
    "Employed": "10.3K",
    "Unemployed": "5.14K",
    "PctChngEmployed": "-30.7%",
    "LaborForce": "15.4K",
    "Rate": "33.3%",
    "CurrentWarns": "0"
  },
  "Harris County": {
    "MarchEmployed": "16K",
    "CumClaims": "4.61K",
    "Employed": "11.4K",
    "Unemployed": "5.25K",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "16.6K",
    "Rate": "31.6%",
    "CurrentWarns": "0"
  },
  "Atkinson County": {
    "MarchEmployed": "4.85K",
    "CumClaims": "5.08K",
    "Employed": "-234",
    "Unemployed": "5.26K",
    "PctChngEmployed": "-104.8%",
    "LaborForce": "5.02K",
    "Rate": "104.7%",
    "CurrentWarns": "0"
  },
  "Tift County": {
    "MarchEmployed": "19.3K",
    "CumClaims": "5.49K",
    "Employed": "13.8K",
    "Unemployed": "6.32K",
    "PctChngEmployed": "-28.4%",
    "LaborForce": "20.2K",
    "Rate": "31.3%",
    "CurrentWarns": "0"
  },
  "Tifton, GA": {
    "MarchEmployed": "19.3K",
    "CumClaims": "5.49K",
    "Employed": "13.8K",
    "Unemployed": "6.32K",
    "PctChngEmployed": "-28.4%",
    "LaborForce": "20.2K",
    "Rate": "31.3%",
    "CurrentWarns": "0"
  },
  "Cornelia, GA": {
    "MarchEmployed": "18.3K",
    "CumClaims": "5.28K",
    "Employed": "13K",
    "Unemployed": "6.16K",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "19.1K",
    "Rate": "32.1%",
    "CurrentWarns": "0"
  },
  "Habersham County": {
    "MarchEmployed": "18.3K",
    "CumClaims": "5.28K",
    "Employed": "13K",
    "Unemployed": "6.16K",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "19.1K",
    "Rate": "32.1%",
    "CurrentWarns": "0"
  },
  "Moultrie, GA": {
    "MarchEmployed": "20.8K",
    "CumClaims": "4.75K",
    "Employed": "16.1K",
    "Unemployed": "5.56K",
    "PctChngEmployed": "-22.8%",
    "LaborForce": "21.6K",
    "Rate": "25.7%",
    "CurrentWarns": "0"
  },
  "Colquitt County": {
    "MarchEmployed": "20.8K",
    "CumClaims": "4.75K",
    "Employed": "16.1K",
    "Unemployed": "5.56K",
    "PctChngEmployed": "-22.8%",
    "LaborForce": "21.6K",
    "Rate": "25.7%",
    "CurrentWarns": "0"
  },
  "Gilmer County": {
    "MarchEmployed": "11.3K",
    "CumClaims": "4.08K",
    "Employed": "7.22K",
    "Unemployed": "4.61K",
    "PctChngEmployed": "-36.1%",
    "LaborForce": "11.8K",
    "Rate": "38.9%",
    "CurrentWarns": "1"
  },
  "Waycross, GA": {
    "MarchEmployed": "23.4K",
    "CumClaims": "5.75K",
    "Employed": "17.7K",
    "Unemployed": "6.82K",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "24.5K",
    "Rate": "27.8%",
    "CurrentWarns": "1"
  },
  "Dawson County": {
    "MarchEmployed": "12K",
    "CumClaims": "4.85K",
    "Employed": "7.13K",
    "Unemployed": "5.29K",
    "PctChngEmployed": "-40.5%",
    "LaborForce": "12.4K",
    "Rate": "42.6%",
    "CurrentWarns": "1"
  },
  "Madison County": {
    "MarchEmployed": "12.8K",
    "CumClaims": "4.44K",
    "Employed": "8.34K",
    "Unemployed": "4.97K",
    "PctChngEmployed": "-34.7%",
    "LaborForce": "13.3K",
    "Rate": "37.3%",
    "CurrentWarns": "0"
  },
  "Franklin County": {
    "MarchEmployed": "9.56K",
    "CumClaims": "3.89K",
    "Employed": "5.68K",
    "Unemployed": "4.38K",
    "PctChngEmployed": "-40.6%",
    "LaborForce": "10.1K",
    "Rate": "43.5%",
    "CurrentWarns": "0"
  },
  "Coffee County": {
    "MarchEmployed": "18.2K",
    "CumClaims": "4.54K",
    "Employed": "13.7K",
    "Unemployed": "5.57K",
    "PctChngEmployed": "-24.9%",
    "LaborForce": "19.2K",
    "Rate": "29.0%",
    "CurrentWarns": "0"
  },
  "Cordele, GA": {
    "MarchEmployed": "9.08K",
    "CumClaims": "4.08K",
    "Employed": "5K",
    "Unemployed": "4.54K",
    "PctChngEmployed": "-44.9%",
    "LaborForce": "9.55K",
    "Rate": "47.6%",
    "CurrentWarns": "2"
  },
  "Crisp County": {
    "MarchEmployed": "9.08K",
    "CumClaims": "4.08K",
    "Employed": "5K",
    "Unemployed": "4.54K",
    "PctChngEmployed": "-44.9%",
    "LaborForce": "9.55K",
    "Rate": "47.6%",
    "CurrentWarns": "2"
  },
  "Lumpkin County": {
    "MarchEmployed": "16.2K",
    "CumClaims": "4.92K",
    "Employed": "11.3K",
    "Unemployed": "5.57K",
    "PctChngEmployed": "-30.4%",
    "LaborForce": "16.8K",
    "Rate": "33.1%",
    "CurrentWarns": "1"
  },
  "Ben Hill County": {
    "MarchEmployed": "5K",
    "CumClaims": "4.69K",
    "Employed": "301",
    "Unemployed": "5.1K",
    "PctChngEmployed": "-94.0%",
    "LaborForce": "5.4K",
    "Rate": "94.4%",
    "CurrentWarns": "0"
  },
  "Fitzgerald, GA": {
    "MarchEmployed": "5K",
    "CumClaims": "4.69K",
    "Employed": "301",
    "Unemployed": "5.1K",
    "PctChngEmployed": "-94.0%",
    "LaborForce": "5.4K",
    "Rate": "94.4%",
    "CurrentWarns": "0"
  },
  "Thomas County": {
    "MarchEmployed": "15.7K",
    "CumClaims": "4.81K",
    "Employed": "10.9K",
    "Unemployed": "5.64K",
    "PctChngEmployed": "-30.7%",
    "LaborForce": "16.5K",
    "Rate": "34.1%",
    "CurrentWarns": "0"
  },
  "Thomasville, GA": {
    "MarchEmployed": "15.7K",
    "CumClaims": "4.81K",
    "Employed": "10.9K",
    "Unemployed": "5.64K",
    "PctChngEmployed": "-30.7%",
    "LaborForce": "16.5K",
    "Rate": "34.1%",
    "CurrentWarns": "0"
  },
  "Vidalia, GA": {
    "MarchEmployed": "14.7K",
    "CumClaims": "4.7K",
    "Employed": "10K",
    "Unemployed": "5.6K",
    "PctChngEmployed": "-31.9%",
    "LaborForce": "15.6K",
    "Rate": "35.8%",
    "CurrentWarns": "1"
  },
  "Fannin County": {
    "MarchEmployed": "11K",
    "CumClaims": "3.77K",
    "Employed": "7.23K",
    "Unemployed": "4.27K",
    "PctChngEmployed": "-34.3%",
    "LaborForce": "11.5K",
    "Rate": "37.1%",
    "CurrentWarns": "0"
  },
  "Toccoa, GA": {
    "MarchEmployed": "10.2K",
    "CumClaims": "3.66K",
    "Employed": "6.52K",
    "Unemployed": "4.18K",
    "PctChngEmployed": "-35.9%",
    "LaborForce": "10.7K",
    "Rate": "39.0%",
    "CurrentWarns": "0"
  },
  "Stephens County": {
    "MarchEmployed": "10.2K",
    "CumClaims": "3.66K",
    "Employed": "6.52K",
    "Unemployed": "4.18K",
    "PctChngEmployed": "-35.9%",
    "LaborForce": "10.7K",
    "Rate": "39.0%",
    "CurrentWarns": "0"
  },
  "White County": {
    "MarchEmployed": "15.9K",
    "CumClaims": "4.54K",
    "Employed": "11.4K",
    "Unemployed": "5.1K",
    "PctChngEmployed": "-28.5%",
    "LaborForce": "16.5K",
    "Rate": "30.9%",
    "CurrentWarns": "1"
  },
  "Peach County": {
    "MarchEmployed": "11.4K",
    "CumClaims": "3.9K",
    "Employed": "7.47K",
    "Unemployed": "4.46K",
    "PctChngEmployed": "-34.3%",
    "LaborForce": "11.9K",
    "Rate": "37.4%",
    "CurrentWarns": "2"
  },
  "Banks County": {
    "MarchEmployed": "9.48K",
    "CumClaims": "3.16K",
    "Employed": "6.32K",
    "Unemployed": "3.51K",
    "PctChngEmployed": "-33.3%",
    "LaborForce": "9.83K",
    "Rate": "35.7%",
    "CurrentWarns": "1"
  },
  "Haralson County": {
    "MarchEmployed": "12.1K",
    "CumClaims": "5.03K",
    "Employed": "7.12K",
    "Unemployed": "5.59K",
    "PctChngEmployed": "-41.4%",
    "LaborForce": "12.7K",
    "Rate": "44.0%",
    "CurrentWarns": "0"
  },
  "Thomaston, GA": {
    "MarchEmployed": "10.9K",
    "CumClaims": "3.88K",
    "Employed": "7.06K",
    "Unemployed": "4.38K",
    "PctChngEmployed": "-35.4%",
    "LaborForce": "11.4K",
    "Rate": "38.3%",
    "CurrentWarns": "0"
  },
  "Upson County": {
    "MarchEmployed": "10.9K",
    "CumClaims": "3.88K",
    "Employed": "7.06K",
    "Unemployed": "4.38K",
    "PctChngEmployed": "-35.4%",
    "LaborForce": "11.4K",
    "Rate": "38.3%",
    "CurrentWarns": "0"
  },
  "Meriwether County": {
    "MarchEmployed": "8.53K",
    "CumClaims": "3.19K",
    "Employed": "5.35K",
    "Unemployed": "3.68K",
    "PctChngEmployed": "-37.3%",
    "LaborForce": "9.02K",
    "Rate": "40.7%",
    "CurrentWarns": "0"
  },
  "Union County": {
    "MarchEmployed": "9.93K",
    "CumClaims": "2.96K",
    "Employed": "6.98K",
    "Unemployed": "3.37K",
    "PctChngEmployed": "-29.8%",
    "LaborForce": "10.3K",
    "Rate": "32.6%",
    "CurrentWarns": "0"
  },
  "Wayne County": {
    "MarchEmployed": "10.8K",
    "CumClaims": "3.13K",
    "Employed": "7.68K",
    "Unemployed": "3.68K",
    "PctChngEmployed": "-29.0%",
    "LaborForce": "11.4K",
    "Rate": "32.4%",
    "CurrentWarns": "0"
  },
  "Jesup, GA": {
    "MarchEmployed": "10.8K",
    "CumClaims": "3.13K",
    "Employed": "7.68K",
    "Unemployed": "3.68K",
    "PctChngEmployed": "-29.0%",
    "LaborForce": "11.4K",
    "Rate": "32.4%",
    "CurrentWarns": "0"
  },
  "Monroe County": {
    "MarchEmployed": "12.5K",
    "CumClaims": "2.95K",
    "Employed": "9.6K",
    "Unemployed": "3.5K",
    "PctChngEmployed": "-23.5%",
    "LaborForce": "13.1K",
    "Rate": "26.7%",
    "CurrentWarns": "0"
  },
  "Toombs County": {
    "MarchEmployed": "11.1K",
    "CumClaims": "3.51K",
    "Employed": "7.61K",
    "Unemployed": "4.19K",
    "PctChngEmployed": "-31.6%",
    "LaborForce": "11.8K",
    "Rate": "35.5%",
    "CurrentWarns": "1"
  },
  "Putnam County": {
    "MarchEmployed": "7.82K",
    "CumClaims": "2.95K",
    "Employed": "4.88K",
    "Unemployed": "3.37K",
    "PctChngEmployed": "-37.7%",
    "LaborForce": "8.24K",
    "Rate": "40.9%",
    "CurrentWarns": "0"
  },
  "Ware County": {
    "MarchEmployed": "15K",
    "CumClaims": "3.72K",
    "Employed": "11.3K",
    "Unemployed": "4.45K",
    "PctChngEmployed": "-24.8%",
    "LaborForce": "15.7K",
    "Rate": "28.3%",
    "CurrentWarns": "1"
  },
  "Morgan County": {
    "MarchEmployed": "8.98K",
    "CumClaims": "2.84K",
    "Employed": "6.14K",
    "Unemployed": "3.19K",
    "PctChngEmployed": "-31.7%",
    "LaborForce": "9.33K",
    "Rate": "34.2%",
    "CurrentWarns": "0"
  },
  "Clinch County": {
    "MarchEmployed": "2.48K",
    "CumClaims": "2.76K",
    "Employed": "-282",
    "Unemployed": "2.89K",
    "PctChngEmployed": "-111.4%",
    "LaborForce": "2.61K",
    "Rate": "110.8%",
    "CurrentWarns": "0"
  },
  "Berrien County": {
    "MarchEmployed": "7.22K",
    "CumClaims": "2.6K",
    "Employed": "4.62K",
    "Unemployed": "3.02K",
    "PctChngEmployed": "-36.1%",
    "LaborForce": "7.64K",
    "Rate": "39.6%",
    "CurrentWarns": "0"
  },
  "Americus, GA": {
    "MarchEmployed": "14.4K",
    "CumClaims": "3.02K",
    "Employed": "11.3K",
    "Unemployed": "3.92K",
    "PctChngEmployed": "-21.1%",
    "LaborForce": "15.2K",
    "Rate": "25.7%",
    "CurrentWarns": "2"
  },
  "Jones County": {
    "MarchEmployed": "13.2K",
    "CumClaims": "2.59K",
    "Employed": "10.7K",
    "Unemployed": "3.14K",
    "PctChngEmployed": "-19.6%",
    "LaborForce": "13.8K",
    "Rate": "22.8%",
    "CurrentWarns": "0"
  },
  "Hart County": {
    "MarchEmployed": "10.6K",
    "CumClaims": "2.54K",
    "Employed": "8.03K",
    "Unemployed": "3.12K",
    "PctChngEmployed": "-24.0%",
    "LaborForce": "11.2K",
    "Rate": "28.0%",
    "CurrentWarns": "0"
  },
  "Decatur County": {
    "MarchEmployed": "11.2K",
    "CumClaims": "2.76K",
    "Employed": "8.44K",
    "Unemployed": "3.29K",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "11.7K",
    "Rate": "28.1%",
    "CurrentWarns": "0"
  },
  "Bainbridge, GA": {
    "MarchEmployed": "11.2K",
    "CumClaims": "2.76K",
    "Employed": "8.44K",
    "Unemployed": "3.29K",
    "PctChngEmployed": "-24.6%",
    "LaborForce": "11.7K",
    "Rate": "28.1%",
    "CurrentWarns": "0"
  },
  "Greene County": {
    "MarchEmployed": "6.65K",
    "CumClaims": "2.48K",
    "Employed": "4.16K",
    "Unemployed": "2.84K",
    "PctChngEmployed": "-37.4%",
    "LaborForce": "7K",
    "Rate": "40.5%",
    "CurrentWarns": "1"
  },
  "Elbert County": {
    "MarchEmployed": "7.3K",
    "CumClaims": "2.38K",
    "Employed": "4.92K",
    "Unemployed": "2.79K",
    "PctChngEmployed": "-32.6%",
    "LaborForce": "7.71K",
    "Rate": "36.2%",
    "CurrentWarns": "0"
  },
  "Sumter County": {
    "MarchEmployed": "12.2K",
    "CumClaims": "2.76K",
    "Employed": "9.46K",
    "Unemployed": "3.56K",
    "PctChngEmployed": "-22.6%",
    "LaborForce": "13K",
    "Rate": "27.3%",
    "CurrentWarns": "2"
  },
  "McDuffie County": {
    "MarchEmployed": "8.42K",
    "CumClaims": "2.8K",
    "Employed": "5.62K",
    "Unemployed": "3.36K",
    "PctChngEmployed": "-33.2%",
    "LaborForce": "8.98K",
    "Rate": "37.4%",
    "CurrentWarns": "1"
  },
  "Screven County": {
    "MarchEmployed": "4.79K",
    "CumClaims": "2.03K",
    "Employed": "2.76K",
    "Unemployed": "2.34K",
    "PctChngEmployed": "-42.4%",
    "LaborForce": "5.1K",
    "Rate": "45.9%",
    "CurrentWarns": "0"
  },
  "Oglethorpe County": {
    "MarchEmployed": "6.69K",
    "CumClaims": "1.55K",
    "Employed": "5.14K",
    "Unemployed": "1.82K",
    "PctChngEmployed": "-23.2%",
    "LaborForce": "6.96K",
    "Rate": "26.1%",
    "CurrentWarns": "0"
  },
  "Brantley County": {
    "MarchEmployed": "6.83K",
    "CumClaims": "2.11K",
    "Employed": "4.72K",
    "Unemployed": "2.45K",
    "PctChngEmployed": "-30.8%",
    "LaborForce": "7.17K",
    "Rate": "34.2%",
    "CurrentWarns": "0"
  },
  "Rabun County": {
    "MarchEmployed": "6.69K",
    "CumClaims": "2.29K",
    "Employed": "4.4K",
    "Unemployed": "2.6K",
    "PctChngEmployed": "-34.2%",
    "LaborForce": "7.01K",
    "Rate": "37.2%",
    "CurrentWarns": "0"
  },
  "Pike County": {
    "MarchEmployed": "8.64K",
    "CumClaims": "2.44K",
    "Employed": "6.21K",
    "Unemployed": "2.79K",
    "PctChngEmployed": "-28.2%",
    "LaborForce": "9K",
    "Rate": "31.0%",
    "CurrentWarns": "1"
  },
  "Dodge County": {
    "MarchEmployed": "6.58K",
    "CumClaims": "1.45K",
    "Employed": "5.13K",
    "Unemployed": "1.91K",
    "PctChngEmployed": "-22.0%",
    "LaborForce": "7.04K",
    "Rate": "27.1%",
    "CurrentWarns": "0"
  },
  "Cook County": {
    "MarchEmployed": "7.83K",
    "CumClaims": "2.03K",
    "Employed": "5.79K",
    "Unemployed": "2.36K",
    "PctChngEmployed": "-26.0%",
    "LaborForce": "8.16K",
    "Rate": "29.0%",
    "CurrentWarns": "0"
  },
  "Burke County": {
    "MarchEmployed": "8.74K",
    "CumClaims": "2.32K",
    "Employed": "6.42K",
    "Unemployed": "2.85K",
    "PctChngEmployed": "-26.6%",
    "LaborForce": "9.27K",
    "Rate": "30.8%",
    "CurrentWarns": "0"
  },
  "Lamar County": {
    "MarchEmployed": "7.92K",
    "CumClaims": "2.28K",
    "Employed": "5.63K",
    "Unemployed": "2.71K",
    "PctChngEmployed": "-28.9%",
    "LaborForce": "8.34K",
    "Rate": "32.5%",
    "CurrentWarns": "0"
  },
  "Emanuel County": {
    "MarchEmployed": "7.88K",
    "CumClaims": "1.81K",
    "Employed": "6.07K",
    "Unemployed": "2.35K",
    "PctChngEmployed": "-23.0%",
    "LaborForce": "8.42K",
    "Rate": "27.9%",
    "CurrentWarns": "0"
  },
  "Long County": {
    "MarchEmployed": "7.91K",
    "CumClaims": "1.64K",
    "Employed": "6.27K",
    "Unemployed": "2K",
    "PctChngEmployed": "-20.7%",
    "LaborForce": "8.27K",
    "Rate": "24.2%",
    "CurrentWarns": "0"
  },
  "Pierce County": {
    "MarchEmployed": "8.41K",
    "CumClaims": "2.02K",
    "Employed": "6.38K",
    "Unemployed": "2.37K",
    "PctChngEmployed": "-24.1%",
    "LaborForce": "8.75K",
    "Rate": "27.0%",
    "CurrentWarns": "0"
  },
  "Appling County": {
    "MarchEmployed": "9.31K",
    "CumClaims": "1.88K",
    "Employed": "7.42K",
    "Unemployed": "2.31K",
    "PctChngEmployed": "-20.2%",
    "LaborForce": "9.74K",
    "Rate": "23.7%",
    "CurrentWarns": "0"
  },
  "Grady County": {
    "MarchEmployed": "10.1K",
    "CumClaims": "1.96K",
    "Employed": "8.12K",
    "Unemployed": "2.39K",
    "PctChngEmployed": "-19.5%",
    "LaborForce": "10.5K",
    "Rate": "22.7%",
    "CurrentWarns": "0"
  },
  "Jeff Davis County": {
    "MarchEmployed": "5.72K",
    "CumClaims": "1.43K",
    "Employed": "4.3K",
    "Unemployed": "1.78K",
    "PctChngEmployed": "-25.0%",
    "LaborForce": "6.07K",
    "Rate": "29.2%",
    "CurrentWarns": "0"
  },
  "Towns County": {
    "MarchEmployed": "3.66K",
    "CumClaims": "1.42K",
    "Employed": "2.25K",
    "Unemployed": "1.66K",
    "PctChngEmployed": "-38.6%",
    "LaborForce": "3.91K",
    "Rate": "42.5%",
    "CurrentWarns": "1"
  },
  "Jasper County": {
    "MarchEmployed": "6.75K",
    "CumClaims": "1.72K",
    "Employed": "5.03K",
    "Unemployed": "1.99K",
    "PctChngEmployed": "-25.5%",
    "LaborForce": "7.02K",
    "Rate": "28.4%",
    "CurrentWarns": "0"
  },
  "McIntosh County": {
    "MarchEmployed": "5.86K",
    "CumClaims": "1.73K",
    "Employed": "4.13K",
    "Unemployed": "2K",
    "PctChngEmployed": "-29.5%",
    "LaborForce": "6.13K",
    "Rate": "32.6%",
    "CurrentWarns": "0"
  },
  "Worth County": {
    "MarchEmployed": "8.58K",
    "CumClaims": "1.73K",
    "Employed": "6.85K",
    "Unemployed": "2.16K",
    "PctChngEmployed": "-20.2%",
    "LaborForce": "9.01K",
    "Rate": "24.0%",
    "CurrentWarns": "0"
  },
  "Mitchell County": {
    "MarchEmployed": "8.16K",
    "CumClaims": "1.45K",
    "Employed": "6.71K",
    "Unemployed": "1.95K",
    "PctChngEmployed": "-17.8%",
    "LaborForce": "8.66K",
    "Rate": "22.5%",
    "CurrentWarns": "0"
  },
  "Jefferson County": {
    "MarchEmployed": "6.3K",
    "CumClaims": "1.58K",
    "Employed": "4.72K",
    "Unemployed": "1.98K",
    "PctChngEmployed": "-25.1%",
    "LaborForce": "6.7K",
    "Rate": "29.6%",
    "CurrentWarns": "1"
  },
  "Calhoun County": {
    "MarchEmployed": "2.22K",
    "CumClaims": "1.32K",
    "Employed": "899",
    "Unemployed": "1.44K",
    "PctChngEmployed": "-59.5%",
    "LaborForce": "2.34K",
    "Rate": "61.5%",
    "CurrentWarns": "0"
  },
  "Heard County": {
    "MarchEmployed": "5.09K",
    "CumClaims": "1.54K",
    "Employed": "3.55K",
    "Unemployed": "1.78K",
    "PctChngEmployed": "-30.2%",
    "LaborForce": "5.33K",
    "Rate": "33.4%",
    "CurrentWarns": "0"
  },
  "Tattnall County": {
    "MarchEmployed": "9.22K",
    "CumClaims": "1.41K",
    "Employed": "7.81K",
    "Unemployed": "1.9K",
    "PctChngEmployed": "-15.3%",
    "LaborForce": "9.7K",
    "Rate": "19.5%",
    "CurrentWarns": "0"
  },
  "Washington County": {
    "MarchEmployed": "6.64K",
    "CumClaims": "1.43K",
    "Employed": "5.21K",
    "Unemployed": "1.8K",
    "PctChngEmployed": "-21.5%",
    "LaborForce": "7.01K",
    "Rate": "25.7%",
    "CurrentWarns": "0"
  },
  "Bacon County": {
    "MarchEmployed": "4.77K",
    "CumClaims": "1.22K",
    "Employed": "3.54K",
    "Unemployed": "1.44K",
    "PctChngEmployed": "-25.7%",
    "LaborForce": "4.99K",
    "Rate": "29.0%",
    "CurrentWarns": "0"
  },
  "Candler County": {
    "MarchEmployed": "5.44K",
    "CumClaims": "1.22K",
    "Employed": "4.23K",
    "Unemployed": "1.43K",
    "PctChngEmployed": "-22.3%",
    "LaborForce": "5.66K",
    "Rate": "25.2%",
    "CurrentWarns": "0"
  },
  "Brooks County": {
    "MarchEmployed": "6.68K",
    "CumClaims": "1.27K",
    "Employed": "5.41K",
    "Unemployed": "1.56K",
    "PctChngEmployed": "-19.0%",
    "LaborForce": "6.97K",
    "Rate": "22.4%",
    "CurrentWarns": "0"
  },
  "Crawford County": {
    "MarchEmployed": "5.41K",
    "CumClaims": "1.28K",
    "Employed": "4.13K",
    "Unemployed": "1.52K",
    "PctChngEmployed": "-23.7%",
    "LaborForce": "5.65K",
    "Rate": "26.9%",
    "CurrentWarns": "1"
  },
  "Dade County": {
    "MarchEmployed": "7.96K",
    "CumClaims": "1.28K",
    "Employed": "6.68K",
    "Unemployed": "1.61K",
    "PctChngEmployed": "-16.1%",
    "LaborForce": "8.29K",
    "Rate": "19.4%",
    "CurrentWarns": "0"
  },
  "Evans County": {
    "MarchEmployed": "4.7K",
    "CumClaims": "1K",
    "Employed": "3.7K",
    "Unemployed": "1.24K",
    "PctChngEmployed": "-21.3%",
    "LaborForce": "4.94K",
    "Rate": "25.1%",
    "CurrentWarns": "0"
  },
  "Charlton County": {
    "MarchEmployed": "4.61K",
    "CumClaims": "883",
    "Employed": "3.73K",
    "Unemployed": "1.1K",
    "PctChngEmployed": "-19.1%",
    "LaborForce": "4.83K",
    "Rate": "22.7%",
    "CurrentWarns": "0"
  },
  "Montgomery County": {
    "MarchEmployed": "3.63K",
    "CumClaims": "1.19K",
    "Employed": "2.44K",
    "Unemployed": "1.4K",
    "PctChngEmployed": "-32.8%",
    "LaborForce": "3.84K",
    "Rate": "36.5%",
    "CurrentWarns": "0"
  },
  "Macon County": {
    "MarchEmployed": "4.5K",
    "CumClaims": "1.35K",
    "Employed": "3.14K",
    "Unemployed": "1.63K",
    "PctChngEmployed": "-30.1%",
    "LaborForce": "4.77K",
    "Rate": "34.2%",
    "CurrentWarns": "0"
  },
  "Dooly County": {
    "MarchEmployed": "4.87K",
    "CumClaims": "910",
    "Employed": "3.96K",
    "Unemployed": "1.14K",
    "PctChngEmployed": "-18.7%",
    "LaborForce": "5.1K",
    "Rate": "22.4%",
    "CurrentWarns": "0"
  },
  "Bleckley County": {
    "MarchEmployed": "4.28K",
    "CumClaims": "972",
    "Employed": "3.3K",
    "Unemployed": "1.26K",
    "PctChngEmployed": "-22.7%",
    "LaborForce": "4.56K",
    "Rate": "27.6%",
    "CurrentWarns": "0"
  },
  "Hancock County": {
    "MarchEmployed": "2.35K",
    "CumClaims": "794",
    "Employed": "1.55K",
    "Unemployed": "980",
    "PctChngEmployed": "-33.8%",
    "LaborForce": "2.53K",
    "Rate": "38.7%",
    "CurrentWarns": "0"
  },
  "Early County": {
    "MarchEmployed": "4.28K",
    "CumClaims": "711",
    "Employed": "3.57K",
    "Unemployed": "940",
    "PctChngEmployed": "-16.6%",
    "LaborForce": "4.51K",
    "Rate": "20.9%",
    "CurrentWarns": "0"
  },
  "Chattahoochee County": {
    "MarchEmployed": "1.9K",
    "CumClaims": "786",
    "Employed": "1.11K",
    "Unemployed": "904",
    "PctChngEmployed": "-41.5%",
    "LaborForce": "2.01K",
    "Rate": "44.9%",
    "CurrentWarns": "1"
  },
  "Turner County": {
    "MarchEmployed": "3.02K",
    "CumClaims": "921",
    "Employed": "2.1K",
    "Unemployed": "1.1K",
    "PctChngEmployed": "-30.5%",
    "LaborForce": "3.21K",
    "Rate": "34.5%",
    "CurrentWarns": "0"
  },
  "Wilkinson County": {
    "MarchEmployed": "3.86K",
    "CumClaims": "804",
    "Employed": "3.06K",
    "Unemployed": "988",
    "PctChngEmployed": "-20.8%",
    "LaborForce": "4.04K",
    "Rate": "24.4%",
    "CurrentWarns": "0"
  },
  "Miller County": {
    "MarchEmployed": "2.68K",
    "CumClaims": "429",
    "Employed": "2.25K",
    "Unemployed": "553",
    "PctChngEmployed": "-16.0%",
    "LaborForce": "2.8K",
    "Rate": "19.7%",
    "CurrentWarns": "0"
  },
  "Terrell County": {
    "MarchEmployed": "3.33K",
    "CumClaims": "800",
    "Employed": "2.53K",
    "Unemployed": "980",
    "PctChngEmployed": "-24.0%",
    "LaborForce": "3.51K",
    "Rate": "27.9%",
    "CurrentWarns": "0"
  },
  "Warren County": {
    "MarchEmployed": "2.76K",
    "CumClaims": "659",
    "Employed": "2.1K",
    "Unemployed": "805",
    "PctChngEmployed": "-23.9%",
    "LaborForce": "2.9K",
    "Rate": "27.7%",
    "CurrentWarns": "0"
  },
  "Wilkes County": {
    "MarchEmployed": "3.62K",
    "CumClaims": "703",
    "Employed": "2.92K",
    "Unemployed": "953",
    "PctChngEmployed": "-19.4%",
    "LaborForce": "3.88K",
    "Rate": "24.6%",
    "CurrentWarns": "0"
  },
  "Lincoln County": {
    "MarchEmployed": "3.44K",
    "CumClaims": "765",
    "Employed": "2.68K",
    "Unemployed": "949",
    "PctChngEmployed": "-22.2%",
    "LaborForce": "3.63K",
    "Rate": "26.2%",
    "CurrentWarns": "0"
  },
  "Jenkins County": {
    "MarchEmployed": "2.94K",
    "CumClaims": "701",
    "Employed": "2.24K",
    "Unemployed": "907",
    "PctChngEmployed": "-23.8%",
    "LaborForce": "3.15K",
    "Rate": "28.8%",
    "CurrentWarns": "0"
  },
  "Twiggs County": {
    "MarchEmployed": "2.73K",
    "CumClaims": "613",
    "Employed": "2.12K",
    "Unemployed": "813",
    "PctChngEmployed": "-22.5%",
    "LaborForce": "2.93K",
    "Rate": "27.8%",
    "CurrentWarns": "0"
  },
  "Telfair County": {
    "MarchEmployed": "3.73K",
    "CumClaims": "683",
    "Employed": "3.05K",
    "Unemployed": "1.14K",
    "PctChngEmployed": "-18.3%",
    "LaborForce": "4.18K",
    "Rate": "27.1%",
    "CurrentWarns": "1"
  },
  "Irwin County": {
    "MarchEmployed": "3.23K",
    "CumClaims": "672",
    "Employed": "2.56K",
    "Unemployed": "874",
    "PctChngEmployed": "-20.8%",
    "LaborForce": "3.43K",
    "Rate": "25.5%",
    "CurrentWarns": "0"
  },
  "Marion County": {
    "MarchEmployed": "3.13K",
    "CumClaims": "653",
    "Employed": "2.48K",
    "Unemployed": "835",
    "PctChngEmployed": "-20.8%",
    "LaborForce": "3.31K",
    "Rate": "25.2%",
    "CurrentWarns": "0"
  },
  "Talbot County": {
    "MarchEmployed": "2.66K",
    "CumClaims": "579",
    "Employed": "2.08K",
    "Unemployed": "717",
    "PctChngEmployed": "-21.8%",
    "LaborForce": "2.8K",
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
    "MarchEmployed": "3.57K",
    "CumClaims": "665",
    "Employed": "2.9K",
    "Unemployed": "847",
    "PctChngEmployed": "-18.6%",
    "LaborForce": "3.75K",
    "Rate": "22.6%",
    "CurrentWarns": "0"
  },
  "Randolph County": {
    "MarchEmployed": "2.44K",
    "CumClaims": "1.12K",
    "Employed": "1.32K",
    "Unemployed": "1.27K",
    "PctChngEmployed": "-46.0%",
    "LaborForce": "2.59K",
    "Rate": "49.0%",
    "CurrentWarns": "0"
  },
  "Seminole County": {
    "MarchEmployed": "2.92K",
    "CumClaims": "619",
    "Employed": "2.3K",
    "Unemployed": "788",
    "PctChngEmployed": "-21.2%",
    "LaborForce": "3.08K",
    "Rate": "25.6%",
    "CurrentWarns": "0"
  },
  "Taylor County": {
    "MarchEmployed": "3.14K",
    "CumClaims": "707",
    "Employed": "2.43K",
    "Unemployed": "842",
    "PctChngEmployed": "-22.6%",
    "LaborForce": "3.27K",
    "Rate": "25.7%",
    "CurrentWarns": "0"
  },
  "Johnson County": {
    "MarchEmployed": "3.84K",
    "CumClaims": "638",
    "Employed": "3.2K",
    "Unemployed": "831",
    "PctChngEmployed": "-16.6%",
    "LaborForce": "4.03K",
    "Rate": "20.6%",
    "CurrentWarns": "0"
  },
  "Pulaski County": {
    "MarchEmployed": "3.91K",
    "CumClaims": "728",
    "Employed": "3.18K",
    "Unemployed": "917",
    "PctChngEmployed": "-18.6%",
    "LaborForce": "4.1K",
    "Rate": "22.4%",
    "CurrentWarns": "0"
  },
  "Wilcox County": {
    "MarchEmployed": "2.59K",
    "CumClaims": "411",
    "Employed": "2.18K",
    "Unemployed": "573",
    "PctChngEmployed": "-15.9%",
    "LaborForce": "2.75K",
    "Rate": "20.8%",
    "CurrentWarns": "0"
  },
  "Echols County": {
    "MarchEmployed": "1.88K",
    "CumClaims": "386",
    "Employed": "1.49K",
    "Unemployed": "461",
    "PctChngEmployed": "-20.5%",
    "LaborForce": "1.96K",
    "Rate": "23.6%",
    "CurrentWarns": "0"
  },
  "Treutlen County": {
    "MarchEmployed": "2.49K",
    "CumClaims": "538",
    "Employed": "1.96K",
    "Unemployed": "704",
    "PctChngEmployed": "-21.6%",
    "LaborForce": "2.66K",
    "Rate": "26.5%",
    "CurrentWarns": "0"
  },
  "Glascock County": {
    "MarchEmployed": "1.23K",
    "CumClaims": "325",
    "Employed": "906",
    "Unemployed": "389",
    "PctChngEmployed": "-26.4%",
    "LaborForce": "1.3K",
    "Rate": "30.0%",
    "CurrentWarns": "0"
  },
  "Wheeler County": {
    "MarchEmployed": "1.5K",
    "CumClaims": "328",
    "Employed": "1.18K",
    "Unemployed": "477",
    "PctChngEmployed": "-21.8%",
    "LaborForce": "1.65K",
    "Rate": "28.9%",
    "CurrentWarns": "0"
  },
  "Baker County": {
    "MarchEmployed": "1.13K",
    "CumClaims": "388",
    "Employed": "745",
    "Unemployed": "452",
    "PctChngEmployed": "-34.2%",
    "LaborForce": "1.2K",
    "Rate": "37.8%",
    "CurrentWarns": "0"
  },
  "Schley County": {
    "MarchEmployed": "2.13K",
    "CumClaims": "262",
    "Employed": "1.87K",
    "Unemployed": "360",
    "PctChngEmployed": "-12.3%",
    "LaborForce": "2.23K",
    "Rate": "16.1%",
    "CurrentWarns": "0"
  },
  "Stewart County": {
    "MarchEmployed": "2.32K",
    "CumClaims": "308",
    "Employed": "2.01K",
    "Unemployed": "432",
    "PctChngEmployed": "-13.3%",
    "LaborForce": "2.45K",
    "Rate": "17.7%",
    "CurrentWarns": "0"
  },
  "Webster County": {
    "MarchEmployed": "973",
    "CumClaims": "119",
    "Employed": "854",
    "Unemployed": "183",
    "PctChngEmployed": "-12.2%",
    "LaborForce": "1.04K",
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
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
    "FebLaborForce": "5.19M",
    "CumClaims": "2.13M",
    "PctFebLabor": "41.1%",
    "CurrentWarns": "321"
  },
  "Atlanta-Sandy Springs-Alpharetta, GA": {
    "FebLaborForce": "3.14M",
    "CumClaims": "1.35M",
    "PctFebLabor": "43.0%",
    "CurrentWarns": "207"
  },
  "ARC": {
    "FebLaborForce": "2.47M",
    "CumClaims": "1.1M",
    "PctFebLabor": "44.3%",
    "CurrentWarns": "182"
  },
  "Fulton County": {
    "FebLaborForce": "566K",
    "CumClaims": "287K",
    "PctFebLabor": "50.8%",
    "CurrentWarns": "78"
  },
  "Gwinnett County": {
    "FebLaborForce": "497K",
    "CumClaims": "208K",
    "PctFebLabor": "41.8%",
    "CurrentWarns": "21"
  },
  "DeKalb County": {
    "FebLaborForce": "406K",
    "CumClaims": "172K",
    "PctFebLabor": "42.4%",
    "CurrentWarns": "20"
  },
  "Coastal": {
    "FebLaborForce": "333K",
    "CumClaims": "156K",
    "PctFebLabor": "46.7%",
    "CurrentWarns": "28"
  },
  "Cobb County": {
    "FebLaborForce": "432K",
    "CumClaims": "161K",
    "PctFebLabor": "37.3%",
    "CurrentWarns": "30"
  },
  "Northwest": {
    "FebLaborForce": "427K",
    "CumClaims": "178K",
    "PctFebLabor": "41.6%",
    "CurrentWarns": "18"
  },
  "Northeast": {
    "FebLaborForce": "309K",
    "CumClaims": "123K",
    "PctFebLabor": "39.9%",
    "CurrentWarns": "12"
  },
  "Georgia Mountains": {
    "FebLaborForce": "356K",
    "CumClaims": "122K",
    "PctFebLabor": "34.4%",
    "CurrentWarns": "17"
  },
  "Three Rivers": {
    "FebLaborForce": "254K",
    "CumClaims": "105K",
    "PctFebLabor": "41.2%",
    "CurrentWarns": "10"
  },
  "Savannah, GA": {
    "FebLaborForce": "190K",
    "CumClaims": "97.3K",
    "PctFebLabor": "51.2%",
    "CurrentWarns": "21"
  },
  "Middle Georgia": {
    "FebLaborForce": "222K",
    "CumClaims": "76.2K",
    "PctFebLabor": "34.3%",
    "CurrentWarns": "15"
  },
  "Clayton County": {
    "FebLaborForce": "140K",
    "CumClaims": "75.5K",
    "PctFebLabor": "53.9%",
    "CurrentWarns": "14"
  },
  "Chatham County": {
    "FebLaborForce": "140K",
    "CumClaims": "78.3K",
    "PctFebLabor": "55.8%",
    "CurrentWarns": "21"
  },
  "Southern": {
    "FebLaborForce": "182K",
    "CumClaims": "68.9K",
    "PctFebLabor": "37.8%",
    "CurrentWarns": "2"
  },
  "River Valley": {
    "FebLaborForce": "149K",
    "CumClaims": "57.2K",
    "PctFebLabor": "38.4%",
    "CurrentWarns": "11"
  },
  "CSRA": {
    "FebLaborForce": "212K",
    "CumClaims": "66.9K",
    "PctFebLabor": "31.6%",
    "CurrentWarns": "19"
  },
  "Augusta-Richmond County, GA-SC": {
    "FebLaborForce": "184K",
    "CumClaims": "59.1K",
    "PctFebLabor": "32.2%",
    "CurrentWarns": "18"
  },
  "Henry County": {
    "FebLaborForce": "117K",
    "CumClaims": "59.7K",
    "PctFebLabor": "50.8%",
    "CurrentWarns": "4"
  },
  "Southwest": {
    "FebLaborForce": "151K",
    "CumClaims": "50.3K",
    "PctFebLabor": "33.4%",
    "CurrentWarns": "3"
  },
  "Columbus, GA-AL": {
    "FebLaborForce": "105K",
    "CumClaims": "42.4K",
    "PctFebLabor": "40.3%",
    "CurrentWarns": "6"
  },
  "Heart of Georgia": {
    "FebLaborForce": "118K",
    "CumClaims": "33.7K",
    "PctFebLabor": "28.5%",
    "CurrentWarns": "3"
  },
  "Athens-Clarke County, GA": {
    "FebLaborForce": "100K",
    "CumClaims": "39.4K",
    "PctFebLabor": "39.3%",
    "CurrentWarns": "6"
  },
  "Cherokee County": {
    "FebLaborForce": "138K",
    "CumClaims": "49.9K",
    "PctFebLabor": "36.2%",
    "CurrentWarns": "4"
  },
  "Macon-Bibb County, GA": {
    "FebLaborForce": "104K",
    "CumClaims": "36.7K",
    "PctFebLabor": "35.2%",
    "CurrentWarns": "9"
  },
  "Muscogee County": {
    "FebLaborForce": "77.8K",
    "CumClaims": "33.9K",
    "PctFebLabor": "43.5%",
    "CurrentWarns": "5"
  },
  "Douglas County": {
    "FebLaborForce": "74.4K",
    "CumClaims": "34.2K",
    "PctFebLabor": "46.0%",
    "CurrentWarns": "5"
  },
  "Coweta County": {
    "FebLaborForce": "75.8K",
    "CumClaims": "31.9K",
    "PctFebLabor": "42.1%",
    "CurrentWarns": "5"
  },
  "Dalton, GA": {
    "FebLaborForce": "59.2K",
    "CumClaims": "40.9K",
    "PctFebLabor": "69.1%",
    "CurrentWarns": "7"
  },
  "Richmond County": {
    "FebLaborForce": "86K",
    "CumClaims": "32.2K",
    "PctFebLabor": "37.5%",
    "CurrentWarns": "11"
  },
  "Gainesville, GA": {
    "FebLaborForce": "104K",
    "CumClaims": "36.4K",
    "PctFebLabor": "35.0%",
    "CurrentWarns": "6"
  },
  "Hall County": {
    "FebLaborForce": "104K",
    "CumClaims": "36.4K",
    "PctFebLabor": "35.0%",
    "CurrentWarns": "6"
  },
  "Bibb County": {
    "FebLaborForce": "68.6K",
    "CumClaims": "27.7K",
    "PctFebLabor": "40.5%",
    "CurrentWarns": "8"
  },
  "Forsyth County": {
    "FebLaborForce": "124K",
    "CumClaims": "39.4K",
    "PctFebLabor": "31.8%",
    "CurrentWarns": "6"
  },
  "Fayette County": {
    "FebLaborForce": "58.9K",
    "CumClaims": "28.6K",
    "PctFebLabor": "48.6%",
    "CurrentWarns": "5"
  },
  "Clarke County": {
    "FebLaborForce": "59.9K",
    "CumClaims": "26.3K",
    "PctFebLabor": "43.9%",
    "CurrentWarns": "5"
  },
  "Albany, GA": {
    "FebLaborForce": "66.5K",
    "CumClaims": "26.9K",
    "PctFebLabor": "40.5%",
    "CurrentWarns": "3"
  },
  "Valdosta, GA": {
    "FebLaborForce": "64.8K",
    "CumClaims": "22.6K",
    "PctFebLabor": "34.9%",
    "CurrentWarns": "1"
  },
  "Warner Robins, GA": {
    "FebLaborForce": "83.4K",
    "CumClaims": "27.4K",
    "PctFebLabor": "32.9%",
    "CurrentWarns": "6"
  },
  "Whitfield County": {
    "FebLaborForce": "43.5K",
    "CumClaims": "30.7K",
    "PctFebLabor": "70.6%",
    "CurrentWarns": "6"
  },
  "Paulding County": {
    "FebLaborForce": "87.4K",
    "CumClaims": "27.4K",
    "PctFebLabor": "31.3%",
    "CurrentWarns": "2"
  },
  "Lowndes County": {
    "FebLaborForce": "51.9K",
    "CumClaims": "19.7K",
    "PctFebLabor": "37.9%",
    "CurrentWarns": "1"
  },
  "Houston County": {
    "FebLaborForce": "71.4K",
    "CumClaims": "22.8K",
    "PctFebLabor": "32.0%",
    "CurrentWarns": "4"
  },
  "Newton County": {
    "FebLaborForce": "53.1K",
    "CumClaims": "21.8K",
    "PctFebLabor": "41.2%",
    "CurrentWarns": "2"
  },
  "Rockdale County": {
    "FebLaborForce": "45.5K",
    "CumClaims": "20K",
    "PctFebLabor": "44.0%",
    "CurrentWarns": "1"
  },
  "Brunswick, GA": {
    "FebLaborForce": "52.6K",
    "CumClaims": "24.4K",
    "PctFebLabor": "46.4%",
    "CurrentWarns": "4"
  },
  "Bulloch County": {
    "FebLaborForce": "37K",
    "CumClaims": "15.5K",
    "PctFebLabor": "42.1%",
    "CurrentWarns": "0"
  },
  "Statesboro, GA": {
    "FebLaborForce": "37K",
    "CumClaims": "15.5K",
    "PctFebLabor": "42.1%",
    "CurrentWarns": "0"
  },
  "Bartow County": {
    "FebLaborForce": "51.5K",
    "CumClaims": "25.5K",
    "PctFebLabor": "49.5%",
    "CurrentWarns": "5"
  },
  "Carroll County": {
    "FebLaborForce": "56.3K",
    "CumClaims": "22.3K",
    "PctFebLabor": "39.6%",
    "CurrentWarns": "3"
  },
  "LaGrange, GA-AL": {
    "FebLaborForce": "37.8K",
    "CumClaims": "17.7K",
    "PctFebLabor": "46.8%",
    "CurrentWarns": "1"
  },
  "Troup County": {
    "FebLaborForce": "37.8K",
    "CumClaims": "17.7K",
    "PctFebLabor": "46.8%",
    "CurrentWarns": "1"
  },
  "Rome, GA": {
    "FebLaborForce": "44.8K",
    "CumClaims": "20.3K",
    "PctFebLabor": "45.2%",
    "CurrentWarns": "2"
  },
  "Floyd County": {
    "FebLaborForce": "44.8K",
    "CumClaims": "20.3K",
    "PctFebLabor": "45.2%",
    "CurrentWarns": "2"
  },
  "Columbia County": {
    "FebLaborForce": "75.9K",
    "CumClaims": "19.9K",
    "PctFebLabor": "26.2%",
    "CurrentWarns": "6"
  },
  "Walton County": {
    "FebLaborForce": "46.8K",
    "CumClaims": "18.8K",
    "PctFebLabor": "40.2%",
    "CurrentWarns": "0"
  },
  "Barrow County": {
    "FebLaborForce": "41.1K",
    "CumClaims": "17K",
    "PctFebLabor": "41.4%",
    "CurrentWarns": "0"
  },
  "Dougherty County": {
    "FebLaborForce": "38.9K",
    "CumClaims": "16K",
    "PctFebLabor": "41.2%",
    "CurrentWarns": "3"
  },
  "Jackson County": {
    "FebLaborForce": "37K",
    "CumClaims": "15K",
    "PctFebLabor": "40.5%",
    "CurrentWarns": "3"
  },
  "Jefferson, GA": {
    "FebLaborForce": "37K",
    "CumClaims": "15K",
    "PctFebLabor": "40.5%",
    "CurrentWarns": "3"
  },
  "Glynn County": {
    "FebLaborForce": "39.1K",
    "CumClaims": "19.8K",
    "PctFebLabor": "50.7%",
    "CurrentWarns": "4"
  },
  "Chattanooga, TN-GA": {
    "FebLaborForce": "74.5K",
    "CumClaims": "16.8K",
    "PctFebLabor": "22.5%",
    "CurrentWarns": "0"
  },
  "Hinesville, GA": {
    "FebLaborForce": "35.1K",
    "CumClaims": "11.7K",
    "PctFebLabor": "33.3%",
    "CurrentWarns": "2"
  },
  "Dublin, GA": {
    "FebLaborForce": "25.9K",
    "CumClaims": "8.44K",
    "PctFebLabor": "32.6%",
    "CurrentWarns": "1"
  },
  "Douglas, GA": {
    "FebLaborForce": "24.4K",
    "CumClaims": "11.4K",
    "PctFebLabor": "46.8%",
    "CurrentWarns": "0"
  },
  "Spalding County": {
    "FebLaborForce": "29.2K",
    "CumClaims": "11.9K",
    "PctFebLabor": "40.6%",
    "CurrentWarns": "0"
  },
  "Calhoun, GA": {
    "FebLaborForce": "28.5K",
    "CumClaims": "13.3K",
    "PctFebLabor": "46.6%",
    "CurrentWarns": "0"
  },
  "Gordon County": {
    "FebLaborForce": "28.5K",
    "CumClaims": "13.3K",
    "PctFebLabor": "46.6%",
    "CurrentWarns": "0"
  },
  "Liberty County": {
    "FebLaborForce": "26.7K",
    "CumClaims": "9.61K",
    "PctFebLabor": "36.0%",
    "CurrentWarns": "2"
  },
  "Laurens County": {
    "FebLaborForce": "19.1K",
    "CumClaims": "6.96K",
    "PctFebLabor": "36.4%",
    "CurrentWarns": "1"
  },
  "Effingham County": {
    "FebLaborForce": "31.1K",
    "CumClaims": "10.5K",
    "PctFebLabor": "33.7%",
    "CurrentWarns": "0"
  },
  "Murray County": {
    "FebLaborForce": "15.6K",
    "CumClaims": "10.1K",
    "PctFebLabor": "64.9%",
    "CurrentWarns": "1"
  },
  "Milledgeville, GA": {
    "FebLaborForce": "20.4K",
    "CumClaims": "7.8K",
    "PctFebLabor": "38.3%",
    "CurrentWarns": "0"
  },
  "Crisp County": {
    "FebLaborForce": "9.65K",
    "CumClaims": "5.17K",
    "PctFebLabor": "53.6%",
    "CurrentWarns": "2"
  },
  "Cordele, GA": {
    "FebLaborForce": "9.65K",
    "CumClaims": "5.17K",
    "PctFebLabor": "53.6%",
    "CurrentWarns": "2"
  },
  "Polk County": {
    "FebLaborForce": "18.6K",
    "CumClaims": "7.85K",
    "PctFebLabor": "42.2%",
    "CurrentWarns": "0"
  },
  "Cedartown, GA": {
    "FebLaborForce": "18.6K",
    "CumClaims": "7.85K",
    "PctFebLabor": "42.2%",
    "CurrentWarns": "0"
  },
  "Bryan County": {
    "FebLaborForce": "18.4K",
    "CumClaims": "8.53K",
    "PctFebLabor": "46.4%",
    "CurrentWarns": "0"
  },
  "Waycross, GA": {
    "FebLaborForce": "24.7K",
    "CumClaims": "6.84K",
    "PctFebLabor": "27.7%",
    "CurrentWarns": "1"
  },
  "Lee County": {
    "FebLaborForce": "15K",
    "CumClaims": "7.83K",
    "PctFebLabor": "52.4%",
    "CurrentWarns": "0"
  },
  "Baldwin County": {
    "FebLaborForce": "17.8K",
    "CumClaims": "6.81K",
    "PctFebLabor": "38.2%",
    "CurrentWarns": "0"
  },
  "Thomasville, GA": {
    "FebLaborForce": "16.6K",
    "CumClaims": "5.9K",
    "PctFebLabor": "35.6%",
    "CurrentWarns": "0"
  },
  "Thomas County": {
    "FebLaborForce": "16.6K",
    "CumClaims": "5.9K",
    "PctFebLabor": "35.6%",
    "CurrentWarns": "0"
  },
  "Walker County": {
    "FebLaborForce": "32K",
    "CumClaims": "8.63K",
    "PctFebLabor": "27.0%",
    "CurrentWarns": "0"
  },
  "Harris County": {
    "FebLaborForce": "16.8K",
    "CumClaims": "5.63K",
    "PctFebLabor": "33.5%",
    "CurrentWarns": "0"
  },
  "Ben Hill County": {
    "FebLaborForce": "5.36K",
    "CumClaims": "5.62K",
    "PctFebLabor": "105.0%",
    "CurrentWarns": "0"
  },
  "Fitzgerald, GA": {
    "FebLaborForce": "5.36K",
    "CumClaims": "5.62K",
    "PctFebLabor": "105.0%",
    "CurrentWarns": "0"
  },
  "Moultrie, GA": {
    "FebLaborForce": "22K",
    "CumClaims": "5.79K",
    "PctFebLabor": "26.3%",
    "CurrentWarns": "0"
  },
  "Colquitt County": {
    "FebLaborForce": "22K",
    "CumClaims": "5.79K",
    "PctFebLabor": "26.3%",
    "CurrentWarns": "0"
  },
  "Coffee County": {
    "FebLaborForce": "19.3K",
    "CumClaims": "5.41K",
    "PctFebLabor": "28.1%",
    "CurrentWarns": "0"
  },
  "Oconee County": {
    "FebLaborForce": "19.8K",
    "CumClaims": "5.95K",
    "PctFebLabor": "30.1%",
    "CurrentWarns": "1"
  },
  "Atkinson County": {
    "FebLaborForce": "5.15K",
    "CumClaims": "6.02K",
    "PctFebLabor": "117.0%",
    "CurrentWarns": "0"
  },
  "Camden County": {
    "FebLaborForce": "21K",
    "CumClaims": "6.59K",
    "PctFebLabor": "31.3%",
    "CurrentWarns": "1"
  },
  "St. Marys, GA": {
    "FebLaborForce": "21K",
    "CumClaims": "6.59K",
    "PctFebLabor": "31.3%",
    "CurrentWarns": "1"
  },
  "Tift County": {
    "FebLaborForce": "20.3K",
    "CumClaims": "6.47K",
    "PctFebLabor": "31.8%",
    "CurrentWarns": "0"
  },
  "Tifton, GA": {
    "FebLaborForce": "20.3K",
    "CumClaims": "6.47K",
    "PctFebLabor": "31.8%",
    "CurrentWarns": "0"
  },
  "Franklin County": {
    "FebLaborForce": "10.1K",
    "CumClaims": "4.82K",
    "PctFebLabor": "47.7%",
    "CurrentWarns": "0"
  },
  "Madison County": {
    "FebLaborForce": "13.5K",
    "CumClaims": "5.3K",
    "PctFebLabor": "39.3%",
    "CurrentWarns": "0"
  },
  "Vidalia, GA": {
    "FebLaborForce": "15.7K",
    "CumClaims": "5.63K",
    "PctFebLabor": "35.9%",
    "CurrentWarns": "1"
  },
  "Catoosa County": {
    "FebLaborForce": "34.2K",
    "CumClaims": "6.51K",
    "PctFebLabor": "19.0%",
    "CurrentWarns": "0"
  },
  "Cornelia, GA": {
    "FebLaborForce": "19.2K",
    "CumClaims": "6.15K",
    "PctFebLabor": "32.0%",
    "CurrentWarns": "0"
  },
  "Habersham County": {
    "FebLaborForce": "19.2K",
    "CumClaims": "6.15K",
    "PctFebLabor": "32.0%",
    "CurrentWarns": "0"
  },
  "Dawson County": {
    "FebLaborForce": "12.5K",
    "CumClaims": "5.68K",
    "PctFebLabor": "45.4%",
    "CurrentWarns": "1"
  },
  "Peach County": {
    "FebLaborForce": "12K",
    "CumClaims": "4.6K",
    "PctFebLabor": "38.2%",
    "CurrentWarns": "2"
  },
  "Jesup, GA": {
    "FebLaborForce": "11.4K",
    "CumClaims": "3.9K",
    "PctFebLabor": "34.2%",
    "CurrentWarns": "0"
  },
  "Wayne County": {
    "FebLaborForce": "11.4K",
    "CumClaims": "3.9K",
    "PctFebLabor": "34.2%",
    "CurrentWarns": "0"
  },
  "Lumpkin County": {
    "FebLaborForce": "16.9K",
    "CumClaims": "5.74K",
    "PctFebLabor": "33.9%",
    "CurrentWarns": "1"
  },
  "Meriwether County": {
    "FebLaborForce": "9.05K",
    "CumClaims": "3.85K",
    "PctFebLabor": "42.5%",
    "CurrentWarns": "0"
  },
  "Pickens County": {
    "FebLaborForce": "15.5K",
    "CumClaims": "5.31K",
    "PctFebLabor": "34.2%",
    "CurrentWarns": "0"
  },
  "Banks County": {
    "FebLaborForce": "9.9K",
    "CumClaims": "3.86K",
    "PctFebLabor": "39.0%",
    "CurrentWarns": "1"
  },
  "Americus, GA": {
    "FebLaborForce": "15.3K",
    "CumClaims": "3.72K",
    "PctFebLabor": "24.3%",
    "CurrentWarns": "2"
  },
  "Chattooga County": {
    "FebLaborForce": "10.4K",
    "CumClaims": "5.75K",
    "PctFebLabor": "55.5%",
    "CurrentWarns": "1"
  },
  "Summerville, GA": {
    "FebLaborForce": "10.4K",
    "CumClaims": "5.75K",
    "PctFebLabor": "55.5%",
    "CurrentWarns": "1"
  },
  "Gilmer County": {
    "FebLaborForce": "11.9K",
    "CumClaims": "4.75K",
    "PctFebLabor": "40.0%",
    "CurrentWarns": "1"
  },
  "Upson County": {
    "FebLaborForce": "11.6K",
    "CumClaims": "4.59K",
    "PctFebLabor": "39.7%",
    "CurrentWarns": "0"
  },
  "Thomaston, GA": {
    "FebLaborForce": "11.6K",
    "CumClaims": "4.59K",
    "PctFebLabor": "39.7%",
    "CurrentWarns": "0"
  },
  "Toombs County": {
    "FebLaborForce": "11.8K",
    "CumClaims": "4.14K",
    "PctFebLabor": "35.0%",
    "CurrentWarns": "1"
  },
  "Ware County": {
    "FebLaborForce": "15.8K",
    "CumClaims": "4.34K",
    "PctFebLabor": "27.4%",
    "CurrentWarns": "1"
  },
  "Screven County": {
    "FebLaborForce": "5.11K",
    "CumClaims": "2.61K",
    "PctFebLabor": "51.0%",
    "CurrentWarns": "0"
  },
  "Sumter County": {
    "FebLaborForce": "13.1K",
    "CumClaims": "3.36K",
    "PctFebLabor": "25.7%",
    "CurrentWarns": "2"
  },
  "Toccoa, GA": {
    "FebLaborForce": "10.7K",
    "CumClaims": "4.34K",
    "PctFebLabor": "40.5%",
    "CurrentWarns": "0"
  },
  "Stephens County": {
    "FebLaborForce": "10.7K",
    "CumClaims": "4.34K",
    "PctFebLabor": "40.5%",
    "CurrentWarns": "0"
  },
  "Dodge County": {
    "FebLaborForce": "7.06K",
    "CumClaims": "1.99K",
    "PctFebLabor": "28.2%",
    "CurrentWarns": "0"
  },
  "Butts County": {
    "FebLaborForce": "10.9K",
    "CumClaims": "4.95K",
    "PctFebLabor": "45.3%",
    "CurrentWarns": "0"
  },
  "White County": {
    "FebLaborForce": "16.5K",
    "CumClaims": "5.22K",
    "PctFebLabor": "31.7%",
    "CurrentWarns": "1"
  },
  "McDuffie County": {
    "FebLaborForce": "8.97K",
    "CumClaims": "3.33K",
    "PctFebLabor": "37.1%",
    "CurrentWarns": "1"
  },
  "Hart County": {
    "FebLaborForce": "11.2K",
    "CumClaims": "3.08K",
    "PctFebLabor": "27.5%",
    "CurrentWarns": "0"
  },
  "Elbert County": {
    "FebLaborForce": "7.75K",
    "CumClaims": "2.91K",
    "PctFebLabor": "37.5%",
    "CurrentWarns": "0"
  },
  "Haralson County": {
    "FebLaborForce": "12.8K",
    "CumClaims": "5.64K",
    "PctFebLabor": "44.1%",
    "CurrentWarns": "0"
  },
  "Fannin County": {
    "FebLaborForce": "11.5K",
    "CumClaims": "4.36K",
    "PctFebLabor": "37.8%",
    "CurrentWarns": "0"
  },
  "Greene County": {
    "FebLaborForce": "7K",
    "CumClaims": "2.98K",
    "PctFebLabor": "42.5%",
    "CurrentWarns": "1"
  },
  "Decatur County": {
    "FebLaborForce": "11.9K",
    "CumClaims": "3.32K",
    "PctFebLabor": "27.9%",
    "CurrentWarns": "0"
  },
  "Bainbridge, GA": {
    "FebLaborForce": "11.9K",
    "CumClaims": "3.32K",
    "PctFebLabor": "27.9%",
    "CurrentWarns": "0"
  },
  "Putnam County": {
    "FebLaborForce": "8.27K",
    "CumClaims": "3.44K",
    "PctFebLabor": "41.6%",
    "CurrentWarns": "0"
  },
  "Monroe County": {
    "FebLaborForce": "13.2K",
    "CumClaims": "3.47K",
    "PctFebLabor": "26.3%",
    "CurrentWarns": "0"
  },
  "Pierce County": {
    "FebLaborForce": "8.83K",
    "CumClaims": "2.5K",
    "PctFebLabor": "28.4%",
    "CurrentWarns": "0"
  },
  "Clinch County": {
    "FebLaborForce": "2.64K",
    "CumClaims": "3.31K",
    "PctFebLabor": "125.2%",
    "CurrentWarns": "0"
  },
  "Jones County": {
    "FebLaborForce": "13.9K",
    "CumClaims": "3.08K",
    "PctFebLabor": "22.2%",
    "CurrentWarns": "0"
  },
  "Union County": {
    "FebLaborForce": "10.4K",
    "CumClaims": "3.42K",
    "PctFebLabor": "32.9%",
    "CurrentWarns": "0"
  },
  "Emanuel County": {
    "FebLaborForce": "8.45K",
    "CumClaims": "2.26K",
    "PctFebLabor": "26.8%",
    "CurrentWarns": "0"
  },
  "Morgan County": {
    "FebLaborForce": "9.43K",
    "CumClaims": "3.35K",
    "PctFebLabor": "35.5%",
    "CurrentWarns": "0"
  },
  "Berrien County": {
    "FebLaborForce": "7.71K",
    "CumClaims": "3.05K",
    "PctFebLabor": "39.6%",
    "CurrentWarns": "0"
  },
  "Brantley County": {
    "FebLaborForce": "7.25K",
    "CumClaims": "2.58K",
    "PctFebLabor": "35.5%",
    "CurrentWarns": "0"
  },
  "Long County": {
    "FebLaborForce": "8.36K",
    "CumClaims": "2.07K",
    "PctFebLabor": "24.8%",
    "CurrentWarns": "0"
  },
  "Pike County": {
    "FebLaborForce": "9.05K",
    "CumClaims": "2.85K",
    "PctFebLabor": "31.5%",
    "CurrentWarns": "1"
  },
  "Washington County": {
    "FebLaborForce": "7.07K",
    "CumClaims": "1.76K",
    "PctFebLabor": "24.9%",
    "CurrentWarns": "0"
  },
  "Lamar County": {
    "FebLaborForce": "8.41K",
    "CumClaims": "2.68K",
    "PctFebLabor": "31.8%",
    "CurrentWarns": "0"
  },
  "Brooks County": {
    "FebLaborForce": "7.13K",
    "CumClaims": "1.65K",
    "PctFebLabor": "23.2%",
    "CurrentWarns": "0"
  },
  "Burke County": {
    "FebLaborForce": "9.32K",
    "CumClaims": "2.74K",
    "PctFebLabor": "29.4%",
    "CurrentWarns": "0"
  },
  "Cook County": {
    "FebLaborForce": "8.22K",
    "CumClaims": "2.45K",
    "PctFebLabor": "29.8%",
    "CurrentWarns": "0"
  },
  "Macon County": {
    "FebLaborForce": "4.84K",
    "CumClaims": "1.66K",
    "PctFebLabor": "34.4%",
    "CurrentWarns": "0"
  },
  "Mitchell County": {
    "FebLaborForce": "8.79K",
    "CumClaims": "1.81K",
    "PctFebLabor": "20.6%",
    "CurrentWarns": "0"
  },
  "Worth County": {
    "FebLaborForce": "9.09K",
    "CumClaims": "2.08K",
    "PctFebLabor": "22.9%",
    "CurrentWarns": "0"
  },
  "Oglethorpe County": {
    "FebLaborForce": "7.08K",
    "CumClaims": "1.86K",
    "PctFebLabor": "26.3%",
    "CurrentWarns": "0"
  },
  "Dade County": {
    "FebLaborForce": "8.34K",
    "CumClaims": "1.64K",
    "PctFebLabor": "19.7%",
    "CurrentWarns": "0"
  },
  "Grady County": {
    "FebLaborForce": "10.6K",
    "CumClaims": "2.31K",
    "PctFebLabor": "21.8%",
    "CurrentWarns": "0"
  },
  "Tattnall County": {
    "FebLaborForce": "9.81K",
    "CumClaims": "1.71K",
    "PctFebLabor": "17.5%",
    "CurrentWarns": "0"
  },
  "Candler County": {
    "FebLaborForce": "5.72K",
    "CumClaims": "1.52K",
    "PctFebLabor": "26.7%",
    "CurrentWarns": "0"
  },
  "Jeff Davis County": {
    "FebLaborForce": "6.14K",
    "CumClaims": "1.75K",
    "PctFebLabor": "28.5%",
    "CurrentWarns": "0"
  },
  "Jefferson County": {
    "FebLaborForce": "6.76K",
    "CumClaims": "1.92K",
    "PctFebLabor": "28.3%",
    "CurrentWarns": "1"
  },
  "Jasper County": {
    "FebLaborForce": "7.06K",
    "CumClaims": "2.05K",
    "PctFebLabor": "29.0%",
    "CurrentWarns": "0"
  },
  "Bacon County": {
    "FebLaborForce": "5.06K",
    "CumClaims": "1.55K",
    "PctFebLabor": "30.6%",
    "CurrentWarns": "0"
  },
  "Appling County": {
    "FebLaborForce": "9.9K",
    "CumClaims": "2.22K",
    "PctFebLabor": "22.4%",
    "CurrentWarns": "0"
  },
  "Rabun County": {
    "FebLaborForce": "6.95K",
    "CumClaims": "2.58K",
    "PctFebLabor": "37.2%",
    "CurrentWarns": "0"
  },
  "Heard County": {
    "FebLaborForce": "5.36K",
    "CumClaims": "1.87K",
    "PctFebLabor": "34.8%",
    "CurrentWarns": "0"
  },
  "Evans County": {
    "FebLaborForce": "4.98K",
    "CumClaims": "1.29K",
    "PctFebLabor": "25.8%",
    "CurrentWarns": "0"
  },
  "Montgomery County": {
    "FebLaborForce": "3.86K",
    "CumClaims": "1.49K",
    "PctFebLabor": "38.6%",
    "CurrentWarns": "0"
  },
  "Dooly County": {
    "FebLaborForce": "5.19K",
    "CumClaims": "1.14K",
    "PctFebLabor": "21.9%",
    "CurrentWarns": "0"
  },
  "Calhoun County": {
    "FebLaborForce": "2.38K",
    "CumClaims": "1.65K",
    "PctFebLabor": "69.4%",
    "CurrentWarns": "0"
  },
  "Crawford County": {
    "FebLaborForce": "5.69K",
    "CumClaims": "1.57K",
    "PctFebLabor": "27.7%",
    "CurrentWarns": "1"
  },
  "Charlton County": {
    "FebLaborForce": "4.89K",
    "CumClaims": "1.13K",
    "PctFebLabor": "23.0%",
    "CurrentWarns": "0"
  },
  "Hancock County": {
    "FebLaborForce": "2.55K",
    "CumClaims": "985",
    "PctFebLabor": "38.6%",
    "CurrentWarns": "0"
  },
  "Bleckley County": {
    "FebLaborForce": "4.58K",
    "CumClaims": "1.2K",
    "PctFebLabor": "26.1%",
    "CurrentWarns": "0"
  },
  "Johnson County": {
    "FebLaborForce": "4.06K",
    "CumClaims": "817",
    "PctFebLabor": "20.1%",
    "CurrentWarns": "0"
  },
  "McIntosh County": {
    "FebLaborForce": "6.21K",
    "CumClaims": "1.97K",
    "PctFebLabor": "31.7%",
    "CurrentWarns": "0"
  },
  "Towns County": {
    "FebLaborForce": "3.87K",
    "CumClaims": "1.66K",
    "PctFebLabor": "42.9%",
    "CurrentWarns": "1"
  },
  "Wilkes County": {
    "FebLaborForce": "3.89K",
    "CumClaims": "865",
    "PctFebLabor": "22.2%",
    "CurrentWarns": "0"
  },
  "Early County": {
    "FebLaborForce": "4.55K",
    "CumClaims": "910",
    "PctFebLabor": "20.0%",
    "CurrentWarns": "0"
  },
  "Jenkins County": {
    "FebLaborForce": "3.13K",
    "CumClaims": "895",
    "PctFebLabor": "28.6%",
    "CurrentWarns": "0"
  },
  "Lincoln County": {
    "FebLaborForce": "3.64K",
    "CumClaims": "932",
    "PctFebLabor": "25.6%",
    "CurrentWarns": "0"
  },
  "Twiggs County": {
    "FebLaborForce": "2.93K",
    "CumClaims": "786",
    "PctFebLabor": "26.8%",
    "CurrentWarns": "0"
  },
  "Chattahoochee County": {
    "FebLaborForce": "2.02K",
    "CumClaims": "974",
    "PctFebLabor": "48.1%",
    "CurrentWarns": "1"
  },
  "Terrell County": {
    "FebLaborForce": "3.55K",
    "CumClaims": "981",
    "PctFebLabor": "27.7%",
    "CurrentWarns": "0"
  },
  "Wilkinson County": {
    "FebLaborForce": "4.05K",
    "CumClaims": "981",
    "PctFebLabor": "24.2%",
    "CurrentWarns": "0"
  },
  "Telfair County": {
    "FebLaborForce": "4.2K",
    "CumClaims": "836",
    "PctFebLabor": "19.9%",
    "CurrentWarns": "1"
  },
  "Turner County": {
    "FebLaborForce": "3.23K",
    "CumClaims": "1.07K",
    "PctFebLabor": "33.0%",
    "CurrentWarns": "0"
  },
  "Warren County": {
    "FebLaborForce": "2.9K",
    "CumClaims": "808",
    "PctFebLabor": "27.8%",
    "CurrentWarns": "0"
  },
  "Lanier County": {
    "FebLaborForce": "3.8K",
    "CumClaims": "825",
    "PctFebLabor": "21.7%",
    "CurrentWarns": "0"
  },
  "Randolph County": {
    "FebLaborForce": "2.62K",
    "CumClaims": "1.24K",
    "PctFebLabor": "47.6%",
    "CurrentWarns": "0"
  },
  "Pulaski County": {
    "FebLaborForce": "4.14K",
    "CumClaims": "863",
    "PctFebLabor": "20.8%",
    "CurrentWarns": "0"
  },
  "Talbot County": {
    "FebLaborForce": "2.83K",
    "CumClaims": "709",
    "PctFebLabor": "25.1%",
    "CurrentWarns": "0"
  },
  "Seminole County": {
    "FebLaborForce": "3.12K",
    "CumClaims": "744",
    "PctFebLabor": "23.8%",
    "CurrentWarns": "0"
  },
  "Treutlen County": {
    "FebLaborForce": "2.68K",
    "CumClaims": "661",
    "PctFebLabor": "24.7%",
    "CurrentWarns": "0"
  },
  "Clay County": {
    "FebLaborForce": "910",
    "CumClaims": "801",
    "PctFebLabor": "88.0%",
    "CurrentWarns": "1"
  },
  "Marion County": {
    "FebLaborForce": "3.34K",
    "CumClaims": "836",
    "PctFebLabor": "25.0%",
    "CurrentWarns": "0"
  },
  "Taylor County": {
    "FebLaborForce": "3.26K",
    "CumClaims": "813",
    "PctFebLabor": "25.0%",
    "CurrentWarns": "0"
  },
  "Irwin County": {
    "FebLaborForce": "3.45K",
    "CumClaims": "781",
    "PctFebLabor": "22.6%",
    "CurrentWarns": "0"
  },
  "Wilcox County": {
    "FebLaborForce": "2.75K",
    "CumClaims": "494",
    "PctFebLabor": "17.9%",
    "CurrentWarns": "0"
  },
  "Echols County": {
    "FebLaborForce": "2K",
    "CumClaims": "475",
    "PctFebLabor": "23.8%",
    "CurrentWarns": "0"
  },
  "Glascock County": {
    "FebLaborForce": "1.31K",
    "CumClaims": "396",
    "PctFebLabor": "30.3%",
    "CurrentWarns": "0"
  },
  "Schley County": {
    "FebLaborForce": "2.25K",
    "CumClaims": "359",
    "PctFebLabor": "15.9%",
    "CurrentWarns": "0"
  },
  "Stewart County": {
    "FebLaborForce": "2.46K",
    "CumClaims": "387",
    "PctFebLabor": "15.8%",
    "CurrentWarns": "0"
  },
  "Wheeler County": {
    "FebLaborForce": "1.66K",
    "CumClaims": "412",
    "PctFebLabor": "24.7%",
    "CurrentWarns": "0"
  },
  "Miller County": {
    "FebLaborForce": "2.85K",
    "CumClaims": "512",
    "PctFebLabor": "18.0%",
    "CurrentWarns": "0"
  },
  "Baker County": {
    "FebLaborForce": "1.23K",
    "CumClaims": "460",
    "PctFebLabor": "37.4%",
    "CurrentWarns": "0"
  },
  "Taliaferro County": {
    "FebLaborForce": "581",
    "CumClaims": "185",
    "PctFebLabor": "31.8%",
    "CurrentWarns": "0"
  },
  "Webster County": {
    "FebLaborForce": "1.04K",
    "CumClaims": "150",
    "PctFebLabor": "14.4%",
    "CurrentWarns": "0"
  },
  "Eufaula, AL-GA": {
    "FebLaborForce": "797",
    "CumClaims": "73",
    "PctFebLabor": "9.2%",
    "CurrentWarns": "0"
  },
  "Quitman County": {
    "FebLaborForce": "797",
    "CumClaims": "73",
    "PctFebLabor": "9.2%",
    "CurrentWarns": "0"
  }
}
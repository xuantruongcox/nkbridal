  var Currency = {
    rates: {"USD":1.0,"EUR":1.1165,"GBP":1.27304,"CAD":0.743595,"ARS":0.022239,"AUD":0.690178,"BRL":0.243934,"CLP":0.00143426,"CNY":0.144536,"CYP":0.397899,"CZK":0.0433214,"DKK":0.149499,"EEK":0.0706676,"HKD":0.127398,"HUF":0.00342218,"ISK":0.00813795,"INR":0.0142247,"JMD":0.00739208,"JPY":0.00907719,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0522301,"NZD":0.652707,"NOK":0.113867,"PLN":0.259289,"SGD":0.726427,"SKK":21.5517,"SIT":175.439,"ZAR":0.0693103,"KRW":0.000837011,"SEK":0.103724,"CHF":0.989363,"TWD":0.0318667,"UYU":0.0283773,"MYR":0.239457,"BSD":1.0,"CRC":0.0016887,"RON":0.234465,"PHP":0.0189809,"AED":0.272294,"VEB":0.000100125,"IDR":6.92045e-05,"TRY":0.164931,"THB":0.0314416,"TTD":0.148397,"ILS":0.279685,"SYP":0.00194173,"XCD":0.370032,"COP":0.000301054,"RUB":0.0154529,"HRK":0.150194,"KZT":0.00263341,"TZS":0.000434744,"XPT":819.842,"SAR":0.266667,"NIO":0.0301799,"LAK":0.000115251,"OMR":2.60078,"AMD":0.00207726,"CDF":0.000607424,"KPW":0.00111102,"SPL":6.0,"KES":0.00988275,"ZWD":0.00276319,"KHR":0.000246295,"MVR":0.0649846,"GTQ":0.130609,"BZD":0.496288,"BYR":4.78503e-05,"LYD":0.7145,"DZD":0.00837251,"BIF":0.000544055,"GIP":1.27304,"BOB":0.144806,"XOF":0.00170209,"STD":4.55699e-05,"NGN":0.00278169,"PGK":0.2965,"ERN":0.0666667,"MWK":0.00139007,"CUP":0.0377358,"GMD":0.0201641,"CVE":0.0101251,"BTN":0.0142247,"XAF":0.00170209,"UGX":0.000265278,"MAD":0.1034,"MNT":0.000378617,"LSL":0.0693103,"XAG":14.4428,"TOP":0.429134,"SHP":1.27304,"RSD":0.00945898,"HTG":0.0114417,"MGA":0.000275829,"MZN":0.0157139,"FKP":1.27304,"BWP":0.0930143,"HNL":0.040904,"PYG":0.000157308,"JEP":1.27304,"EGP":0.0587128,"LBP":0.00066335,"ANG":0.55867,"WST":0.374517,"TVD":0.690178,"GYD":0.00477712,"GGP":1.27304,"NPR":0.00884898,"KMF":0.00226946,"IRR":2.3754e-05,"XPD":1317.67,"SRD":0.134105,"TMM":5.69801e-05,"SZL":0.0693103,"MOP":0.123687,"BMD":1.0,"XPF":0.00935626,"ETB":0.034463,"JOD":1.41044,"MDL":0.0558247,"MRO":0.00272559,"YER":0.00399484,"BAM":0.570857,"AWG":0.558659,"PEN":0.299987,"VEF":0.100125,"SLL":0.000111154,"KYD":1.21951,"AOA":0.00306178,"TND":0.334211,"TJS":0.105938,"SCR":0.0734405,"LKR":0.005688,"DJF":0.00562512,"GNF":0.000108397,"VUV":0.00859134,"SDG":0.0221658,"IMP":1.27304,"GEL":0.364311,"FJD":0.463014,"DOP":0.0197282,"XDR":1.37826,"MUR":0.0282669,"MMK":0.000651941,"LRD":0.0055924,"BBD":0.5,"ZMK":7.24437e-05,"XAU":1277.81,"VND":4.27324e-05,"UAH":0.0379417,"TMT":0.2849,"IQD":0.0008358,"BGN":0.570857,"KGS":0.0143164,"RWF":0.00110845,"BHD":2.65957,"UZS":0.000118305,"PKR":0.00674509,"MKD":0.0181462,"AFN":0.0126264,"NAD":0.0693103,"BDT":0.0118754,"AZN":0.588243,"SOS":0.00171698,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.124801,"ALL":0.00909184,"BND":0.726427,"KWD":3.28576,"GHS":0.194063,"ZMW":0.0724437,"XBT":7934.92,"NTD":0.0337206,"BYN":0.478503,"CNH":0.144143,"MRU":0.0272559,"STN":0.0455699,"VES":0.000185496},
    convert: function(amount, from, to) {
      return (amount * this.rates[from]) / this.rates[to];
    }
  };

$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otcy4i6/public/values?alt=json", function(data) {


  var sheetData = data.feed.entry;

  var i;
  for (i = 0; i < sheetData.length; i++) {


    var ico = data.feed.entry[i]['gsx$ico']['$t'];


  }

});














$(document).ready(function() {
  $('#globe').dataTable({
    responsive: true,
    "bServerSide": false,
    "bProcessing": true,
    "sAjaxDataProp": "feed.entry",
    "sAjaxSource": "https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/ofkyxve/public/values?alt=json",

    "columnDefs": [{

      targets: 0,
      
      render: function(ico) {
        return '<svg class="avatar avatar--120"><g class="avatar__box"><image xlink:href="https://coronatrackers.com/assets/icons/cntry/'+ico+'.svg" height="100%" width="100%"></image></g></svg>'
      }
    },
 {
 targets: 10,
                "sortable": false,
                "render": function(ico) {

                    return  '<span id="sparkline_'+ico+'_c"></span>'
                }
            },
 {
 targets: 11,
                "sortable": false,
                "render": function(ico) {

                    return  '<span id="sparkline_'+ico+'_d"></span>'
                }
            }
    
    ],

    "aoColumns": [{
       "autoWidth": true,

        "mDataProp": "gsx$ico.$t"
      },
      {
     
        "mDataProp": "gsx$country.$t"
      },
      {
       "className": "dt_case",
       "mDataProp": "gsx$cases.$t"
      },
      {
      "className": "dt_chc",
        "mDataProp": "gsx$chcases.$t"
      },
      {
      "className": "dt_dth",
        "mDataProp": "gsx$deaths.$t"
      },
      {
        "className": "dt_cdth",
        "mDataProp": "gsx$chdeaths.$t"
      },
      {
        "className": "dt_recov",
        "mDataProp": "gsx$recovdt.$t"
      },
      {
        "className": "dt_ser",
        "mDataProp": "gsx$serdt.$t"
      },
      {
        "className": "dt_cfr",
        "mDataProp": "gsx$cfrdt.$t"
      },
      {
        "className": "dt_rec_rate",
        "mDataProp": "gsx$recratedt.$t"
      },
      {
        "className": "dt_c_chart",
        "mDataProp": "gsx$ico.$t"
      },
      {
        "className": "dt_d_chart",
        "mDataProp": "gsx$ico.$t"
      }
    ]
  });
});










$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otcy4i6/public/values?alt=json", data => {
  var labels = [];
     var us = [];
      var es = [];
  
  var   wrld = [];

var it = [];
var fr = [];
var de = [];
var cn = [];
var ir = [];
var uk = [];
var tr = [];
var be = [];
var ch = [];
var nl = [];
var ca = [];
var br = [];
var pt = [];
var at = [];
var kr = [];
var ru = [];
var il = [];
var se = [];
var ind = [];
var ie = [];
var no = [];
var au = [];
var cl = [];
var dk = [];
var pl = [];
var cz = [];
var pe = [];
var ro = [];
var ec = [];
var jp = [];
var pk = [];
var my = [];
var ph = [];
var id = [];
var sa = [];
var mx = [];
var lu = [];
var cs = [];
var ae = [];
var fi = [];
var pa = [];
var th = [];
var qa = [];
var dom = [];
var co = [];
var gr = [];
var za = [];
var sg = [];
var ua = [];
var ar = [];
var eg = [];
var dz = [];
var is = [];
var by = [];
var hr = [];
var ma = [];
var md = [];
var nz = [];
var iq = [];
var ee = [];
var si = [];
var hu = [];
var hk = [];
var lt = [];
var az = [];
var am = [];
var kw = [];
var bh = [];
var ba = [];
var kz = [];
var cm = [];
var crz = [];
var sk = [];
var mk = [];
var tn = [];
var bg = [];
var lv = [];
var ad = [];
var lb = [];
var uz = [];
var cy = [];
var cr = [];
var cu = [];
var af = [];
var om = [];
var uy = [];
var ci = [];
var bf = [];
var al = [];
var tw = [];
var jo = [];
var re = [];
var uk_ci = [];
var hn = [];
var ne = [];
var mt = [];
var sm = [];
var bd = [];
var mu = [];
var gh = [];
var kg = [];
var ng = [];
var bo = [];
var ps = [];
var vn = [];
var me = [];
var sn = [];
var ge = [];
var gn = [];
var lk = [];
var im = [];
var ke = [];
var yt = [];
var fo = [];
var cg = [];
var ve = [];
var mq = [];
var fr_gua = [];
var bn = [];
var dj = [];
var py = [];
var gi = [];
var kh = [];
var rw = [];
var tt = [];
var sv = [];
var gt = [];
var mg = [];
var mc = [];
var gf = [];
var aw = [];
var li = [];
var ml = [];
var tg = [];
var jm = [];
var bb = [];
var cd = [];
var et = [];
var ug = [];
var pf = [];
var ky = [];
var mo = [];
var ga = [];
var sx = [];
var bs = [];
var bm = [];
var zm = [];
var gy = [];
var gw = [];
var er = [];
var mf = [];
var lr = [];
var ht = [];
var bj = [];
var tz = [];
var ly = [];
var mm = [];
var ao = [];
var ag = [];
var sy = [];
var mv = [];
var gq = [];
var fr_new = [];
var mz = [];
var la = [];
var mn = [];
var na = [];
var sd = [];
var dm = [];
var fj = [];
var cw = [];
var lc = [];
var bw = [];
var so = [];
var gd = [];
var sz = [];
var zw = [];
var td = [];
var gl = [];
var kn = [];
var sc = [];
var sr = [];
var bz = [];
var np = [];
var ms = [];
var mw = [];
var tc = [];
var cf = [];
var va = [];
var vc = [];
var cv = [];
var mr = [];
var ni = [];
var sl = [];
var bl = [];
var bt = [];
var fk = [];
var gm = [];
var st = [];
var eh = [];
var ai = [];
var vg = [];
var bi = [];
var ss = [];
var nl = [];
var pg = [];
var pm = [];
var tl = [];
  
  ///// deaths variables////
  
  
  
var us_d = [];
var es_d = [];
var wrld_d = [];
var it_d = [];
var fr_d = [];
var de_d = [];
var cn_d = [];
var ir_d = [];
var uk_d = [];
var tr_d = [];
var be_d = [];
var ch_d = [];
var nl_d = [];
var ca_d = [];
var br_d = [];
var pt_d = [];
var at_d = [];
var kr_d = [];
var ru_d = [];
var il_d = [];
var se_d = [];
var ind_d = [];
var ie_d = [];
var no_d = [];
var au_d = [];
var cl_d = [];
var dk_d = [];
var pl_d = [];
var cz_d = [];
var pe_d = [];
var ro_d = [];
var ec_d = [];
var jp_d = [];
var pk_d = [];
var my_d = [];
var ph_d = [];
var id_d = [];
var sa_d = [];
var mx_d = [];
var lu_d = [];
var cs_d = [];
var ae_d = [];
var fi_d = [];
var pa_d = [];
var th_d = [];
var qa_d = [];
var dom_d = [];
var co_d = [];
var gr_d = [];
var za_d = [];
var sg_d = [];
var ua_d = [];
var ar_d = [];
var eg_d = [];
var dz_d = [];
var is_d = [];
var by_d = [];
var hr_d = [];
var ma_d = [];
var md_d = [];
var nz_d = [];
var iq_d = [];
var ee_d = [];
var si_d = [];
var hu_d = [];
var hk_d = [];
var lt_d = [];
var az_d = [];
var am_d = [];
var kw_d = [];
var bh_d = [];
var ba_d = [];
var kz_d = [];
var cm_d = [];
var crz_d = [];
var sk_d = [];
var mk_d = [];
var tn_d = [];
var bg_d = [];
var lv_d = [];
var ad_d = [];
var lb_d = [];
var uz_d = [];
var cy_d = [];
var cr_d = [];
var cu_d = [];
var af_d = [];
var om_d = [];
var uy_d = [];
var ci_d = [];
var bf_d = [];
var al_d = [];
var tw_d = [];
var jo_d = [];
var re_d = [];
var uk_ci_d = [];
var hn_d = [];
var ne_d = [];
var mt_d = [];
var sm_d = [];
var bd_d = [];
var mu_d = [];
var gh_d = [];
var kg_d = [];
var ng_d = [];
var bo_d = [];
var ps_d = [];
var vn_d = [];
var me_d = [];
var sn_d = [];
var ge_d = [];
var gn_d = [];
var lk_d = [];
var im_d = [];
var ke_d = [];
var yt_d = [];
var fo_d = [];
var cg_d = [];
var ve_d = [];
var mq_d = [];
var fr_gua_d = [];
var bn_d = [];
var dj_d = [];
var py_d = [];
var gi_d = [];
var kh_d = [];
var rw_d = [];
var tt_d = [];
var sv_d = [];
var gt_d = [];
var mg_d = [];
var mc_d = [];
var gf_d = [];
var aw_d = [];
var li_d = [];
var ml_d = [];
var tg_d = [];
var jm_d = [];
var bb_d = [];
var cd_d = [];
var et_d = [];
var ug_d = [];
var pf_d = [];
var ky_d = [];
var mo_d = [];
var ga_d = [];
var sx_d = [];
var bs_d = [];
var bm_d = [];
var zm_d = [];
var gy_d = [];
var gw_d = [];
var er_d = [];
var mf_d = [];
var lr_d = [];
var ht_d = [];
var bj_d = [];
var tz_d = [];
var ly_d = [];
var mm_d = [];
var ao_d = [];
var ag_d = [];
var sy_d = [];
var mv_d = [];
var gq_d = [];
var fr_new_d = [];
var mz_d = [];
var la_d = [];
var mn_d = [];
var na_d = [];
var sd_d = [];
var dm_d = [];
var fj_d = [];
var cw_d = [];
var lc_d = [];
var bw_d = [];
var so_d = [];
var gd_d = [];
var sz_d = [];
var zw_d = [];
var td_d = [];
var gl_d = [];
var kn_d = [];
var sc_d = [];
var sr_d = [];
var bz_d = [];
var np_d = [];
var ms_d = [];
var mw_d = [];
var tc_d = [];
var cf_d = [];
var va_d = [];
var vc_d = [];
var cv_d = [];
var mr_d = [];
var ni_d = [];
var sl_d = [];
var bl_d = [];
var bt_d = [];
var fk_d = [];
var gm_d = [];
var st_d = [];
var eh_d = [];
var ai_d = [];
var vg_d = [];
var bi_d = [];
var ss_d = [];
var nl_d = [];
var pg_d = [];
var pm_d = [];
var tl_d = [];
  
  //////
  // original: 	us.push(Number(e['gsx$us']['$t']));

  data.feed.entry.forEach(e => {

  labels.push(Number(e.gsx$label.$t));
us.push(Number(e.gsx$us.$t));
es.push(Number(e.gsx$es.$t));
wrld.push(Number(e.gsx$wrld.$t));
it.push(Number(e.gsx$it.$t));
de.push(Number(e.gsx$de.$t));
fr.push(Number(e.gsx$fr.$t));
cn.push(Number(e.gsx$cn.$t));
ir.push(Number(e.gsx$ir.$t));
uk.push(Number(e.gsx$uk.$t));
tr.push(Number(e.gsx$tr.$t));
be.push(Number(e.gsx$be.$t));
ch.push(Number(e.gsx$ch.$t));
nl.push(Number(e.gsx$nl.$t));
ca.push(Number(e.gsx$ca.$t));
br.push(Number(e.gsx$br.$t));
pt.push(Number(e.gsx$pt.$t));
at.push(Number(e.gsx$at.$t));
kr.push(Number(e.gsx$kr.$t));
il.push(Number(e.gsx$il.$t));
ru.push(Number(e.gsx$ru.$t));
se.push(Number(e.gsx$se.$t));
ie.push(Number(e.gsx$au.$t));
au.push(Number(e.gsx$ie.$t));
no.push(Number(e.gsx$no.$t));
ind.push(Number(e.gsx$in.$t));
cl.push(Number(e.gsx$cl.$t));
dk.push(Number(e.gsx$dk.$t));
cz.push(Number(e.gsx$cz.$t));
pl.push(Number(e.gsx$pl.$t));
ro.push(Number(e.gsx$ro.$t));
jp.push(Number(e.gsx$jp.$t));
ec.push(Number(e.gsx$ec.$t));
pe.push(Number(e.gsx$pe.$t));
pk.push(Number(e.gsx$pk.$t));
my.push(Number(e.gsx$my.$t));
ph.push(Number(e.gsx$ph.$t));
mx.push(Number(e.gsx$mx.$t));
lu.push(Number(e.gsx$lu.$t));
id.push(Number(e.gsx$id.$t));
sa.push(Number(e.gsx$sa.$t));
cs.push(Number(e.gsx$cs.$t));
ae.push(Number(e.gsx$ae.$t));
pa.push(Number(e.gsx$pa.$t));
fi.push(Number(e.gsx$fi.$t));
th.push(Number(e.gsx$th.$t));
qa.push(Number(e.gsx$qa.$t));
dom.push(Number(e.gsx$do.$t));
co.push(Number(e.gsx$co.$t));
gr.push(Number(e.gsx$gr.$t));
za.push(Number(e.gsx$za.$t));
ar.push(Number(e.gsx$ar.$t));
ua.push(Number(e.gsx$ua.$t));
sg.push(Number(e.gsx$sg.$t));
is.push(Number(e.gsx$is.$t));
dz.push(Number(e.gsx$dz.$t));
eg.push(Number(e.gsx$eg.$t));
hr.push(Number(e.gsx$hr.$t));
ma.push(Number(e.gsx$ma.$t));
nz.push(Number(e.gsx$nz.$t));
iq.push(Number(e.gsx$iq.$t));
ee.push(Number(e.gsx$ee.$t));
md.push(Number(e.gsx$md.$t));
si.push(Number(e.gsx$si.$t));
by.push(Number(e.gsx$by.$t));
hk.push(Number(e.gsx$hu.$t));
lt.push(Number(e.gsx$hk.$t));
hu.push(Number(e.gsx$lt.$t));
am.push(Number(e.gsx$am.$t));
kw.push(Number(e.gsx$kw.$t));
bh.push(Number(e.gsx$bh.$t));
az.push(Number(e.gsx$az.$t));
ba.push(Number(e.gsx$ba.$t));
cm.push(Number(e.gsx$kz.$t));
kz.push(Number(e.gsx$cm.$t));
crz.push(Number(e.gsx$crz.$t));
sk.push(Number(e.gsx$sk.$t));
tn.push(Number(e.gsx$tn.$t));
mk.push(Number(e.gsx$mk.$t));
bg.push(Number(e.gsx$bg.$t));
lv.push(Number(e.gsx$lv.$t));
lb.push(Number(e.gsx$lb.$t));
ad.push(Number(e.gsx$ad.$t));
uz.push(Number(e.gsx$uz.$t));
cy.push(Number(e.gsx$cy.$t));
cr.push(Number(e.gsx$cr.$t));
cu.push(Number(e.gsx$cu.$t));
uy.push(Number(e.gsx$uy.$t));
af.push(Number(e.gsx$af.$t));
om.push(Number(e.gsx$om.$t));
bf.push(Number(e.gsx$bf.$t));
al.push(Number(e.gsx$al.$t));
ci.push(Number(e.gsx$ci.$t));
tw.push(Number(e.gsx$tw.$t));
re.push(Number(e.gsx$re.$t));
jo.push(Number(e.gsx$jo.$t));
uk_ci.push(Number(e.gsx$ukci.$t));
hn.push(Number(e.gsx$hn.$t));
ne.push(Number(e.gsx$ne.$t));
gh.push(Number(e.gsx$gh.$t));
sm.push(Number(e.gsx$sm.$t));
mt.push(Number(e.gsx$mt.$t));
ng.push(Number(e.gsx$ng.$t));
mu.push(Number(e.gsx$mu.$t));
kg.push(Number(e.gsx$kg.$t));
bo.push(Number(e.gsx$bo.$t));
ps.push(Number(e.gsx$ps.$t));
vn.push(Number(e.gsx$vn.$t));
me.push(Number(e.gsx$me.$t));
sn.push(Number(e.gsx$sn.$t));
bd.push(Number(e.gsx$bd.$t));
ge.push(Number(e.gsx$ge.$t));
lk.push(Number(e.gsx$lk.$t));
yt.push(Number(e.gsx$yt.$t));
fo.push(Number(e.gsx$fo.$t));
cg.push(Number(e.gsx$cg.$t));
ke.push(Number(e.gsx$ke.$t));
ve.push(Number(e.gsx$ve.$t));
gn.push(Number(e.gsx$gn.$t));
im.push(Number(e.gsx$im.$t));
mq.push(Number(e.gsx$mq.$t));
fr_gua.push(Number(e.gsx$frgua.$t));
bn.push(Number(e.gsx$bn.$t));
dj.push(Number(e.gsx$dj.$t));
gi.push(Number(e.gsx$gi.$t));
py.push(Number(e.gsx$py.$t));
kh.push(Number(e.gsx$kh.$t));
rw.push(Number(e.gsx$rw.$t));
tt.push(Number(e.gsx$tt.$t));
sv.push(Number(e.gsx$sv.$t));
mg.push(Number(e.gsx$mg.$t));
gt.push(Number(e.gsx$gt.$t));
gf.push(Number(e.gsx$gf.$t));
mc.push(Number(e.gsx$mc.$t));
li.push(Number(e.gsx$li.$t));
aw.push(Number(e.gsx$aw.$t));
tg.push(Number(e.gsx$tg.$t));
jm.push(Number(e.gsx$jm.$t));
bb.push(Number(e.gsx$bb.$t));
ml.push(Number(e.gsx$ml.$t));
et.push(Number(e.gsx$et.$t));
ug.push(Number(e.gsx$ug.$t));
pf.push(Number(e.gsx$pf.$t));
cd.push(Number(e.gsx$cd.$t));
ky.push(Number(e.gsx$ky.$t));
mo.push(Number(e.gsx$mo.$t));
bs.push(Number(e.gsx$bs.$t));
sx.push(Number(e.gsx$sx.$t));
bm.push(Number(e.gsx$bm.$t));
zm.push(Number(e.gsx$zm.$t));
gy.push(Number(e.gsx$gy.$t));
ga.push(Number(e.gsx$ga.$t));
er.push(Number(e.gsx$er.$t));
gw.push(Number(e.gsx$gw.$t));
mf.push(Number(e.gsx$mf.$t));
lr.push(Number(e.gsx$lr.$t));
ht.push(Number(e.gsx$ht.$t));
bj.push(Number(e.gsx$bj.$t));
tz.push(Number(e.gsx$tz.$t));
mm.push(Number(e.gsx$mm.$t));
ly.push(Number(e.gsx$ly.$t));
ao.push(Number(e.gsx$ao.$t));
ag.push(Number(e.gsx$ag.$t));
sy.push(Number(e.gsx$sy.$t));
mv.push(Number(e.gsx$mv.$t));
gq.push(Number(e.gsx$gq.$t));
fr_new.push(Number(e.gsx$frnew.$t));
mz.push(Number(e.gsx$mz.$t));
mn.push(Number(e.gsx$mn.$t));
na.push(Number(e.gsx$na.$t));
dm.push(Number(e.gsx$dm.$t));
fj.push(Number(e.gsx$fj.$t));
la.push(Number(e.gsx$la.$t));
sd.push(Number(e.gsx$sd.$t));
cw.push(Number(e.gsx$cw.$t));
lc.push(Number(e.gsx$lc.$t));
so.push(Number(e.gsx$so.$t));
gd.push(Number(e.gsx$gd.$t));
sz.push(Number(e.gsx$sz.$t));
zw.push(Number(e.gsx$zw.$t));
gl.push(Number(e.gsx$gl.$t));
kn.push(Number(e.gsx$kn.$t));
sc.push(Number(e.gsx$sc.$t));
sr.push(Number(e.gsx$sr.$t));
td.push(Number(e.gsx$td.$t));
np.push(Number(e.gsx$np.$t));
ms.push(Number(e.gsx$ms.$t));
bz.push(Number(e.gsx$bz.$t));
mw.push(Number(e.gsx$mw.$t));
tc.push(Number(e.gsx$tc.$t));
cf.push(Number(e.gsx$cf.$t));
va.push(Number(e.gsx$va.$t));
vc.push(Number(e.gsx$vc.$t));
cv.push(Number(e.gsx$cv.$t));
sl.push(Number(e.gsx$sl.$t));
bw.push(Number(e.gsx$bw.$t));
mr.push(Number(e.gsx$mr.$t));
ni.push(Number(e.gsx$ni.$t));
bl.push(Number(e.gsx$bl.$t));
bt.push(Number(e.gsx$bt.$t));
fk.push(Number(e.gsx$fk.$t));
gm.push(Number(e.gsx$gm.$t));
st.push(Number(e.gsx$st.$t));
eh.push(Number(e.gsx$eh.$t));
ai.push(Number(e.gsx$ai.$t));
vg.push(Number(e.gsx$vg.$t));
bi.push(Number(e.gsx$bi.$t));
nl.push(Number(e.gsx$nl.$t));
pg.push(Number(e.gsx$pg.$t));
ss.push(Number(e.gsx$ss.$t));
pm.push(Number(e.gsx$pm.$t));
tl.push(Number(e.gsx$tl.$t));


///// death feed ///
us_d.push(Number(e.gsx$usd.$t));

//us_d.push(Number(e['gsx$usd']['$t']));
us_d.push(Number(e.gsx$usd.$t));
es_d.push(Number(e.gsx$esd.$t));
wrld_d.push(Number(e.gsx$wrldd.$t));
it_d.push(Number(e.gsx$itd.$t));
de_d.push(Number(e.gsx$ded.$t));
fr_d.push(Number(e.gsx$frd.$t));
cn_d.push(Number(e.gsx$cnd.$t));
ir_d.push(Number(e.gsx$ird.$t));
uk_d.push(Number(e.gsx$ukd.$t));
tr_d.push(Number(e.gsx$trd.$t));
be_d.push(Number(e.gsx$bed.$t));
ch_d.push(Number(e.gsx$chd.$t));
nl_d.push(Number(e.gsx$nld.$t));
ca_d.push(Number(e.gsx$cad.$t));
br_d.push(Number(e.gsx$brd.$t));
pt_d.push(Number(e.gsx$ptd.$t));
at_d.push(Number(e.gsx$atd.$t));
kr_d.push(Number(e.gsx$krd.$t));
il_d.push(Number(e.gsx$ild.$t));
ru_d.push(Number(e.gsx$rud.$t));
se_d.push(Number(e.gsx$sed.$t));
ie_d.push(Number(e.gsx$aud.$t));
au_d.push(Number(e.gsx$ied.$t));
no_d.push(Number(e.gsx$nod.$t));
ind_d.push(Number(e.gsx$ind.$t));
cl_d.push(Number(e.gsx$cld.$t));
dk_d.push(Number(e.gsx$dkd.$t));
cz_d.push(Number(e.gsx$czd.$t));
pl_d.push(Number(e.gsx$pld.$t));
ro_d.push(Number(e.gsx$rod.$t));
jp_d.push(Number(e.gsx$jpd.$t));
ec_d.push(Number(e.gsx$ecd.$t));
pe_d.push(Number(e.gsx$ped.$t));
pk_d.push(Number(e.gsx$pkd.$t));
my_d.push(Number(e.gsx$myd.$t));
ph_d.push(Number(e.gsx$phd.$t));
mx_d.push(Number(e.gsx$mxd.$t));
lu_d.push(Number(e.gsx$lud.$t));
id_d.push(Number(e.gsx$idd.$t));
sa_d.push(Number(e.gsx$sad.$t));
cs_d.push(Number(e.gsx$csd.$t));
ae_d.push(Number(e.gsx$aed.$t));
pa_d.push(Number(e.gsx$pad.$t));
fi_d.push(Number(e.gsx$fid.$t));
th_d.push(Number(e.gsx$thd.$t));
qa_d.push(Number(e.gsx$qad.$t));
dom_d.push(Number(e.gsx$dod.$t));
co_d.push(Number(e.gsx$cod.$t));
gr_d.push(Number(e.gsx$grd.$t));
za_d.push(Number(e.gsx$zad.$t));
ar_d.push(Number(e.gsx$ard.$t));
ua_d.push(Number(e.gsx$uad.$t));
sg_d.push(Number(e.gsx$sgd.$t));
is_d.push(Number(e.gsx$isd.$t));
dz_d.push(Number(e.gsx$dzd.$t));
eg_d.push(Number(e.gsx$egd.$t));
hr_d.push(Number(e.gsx$hrd.$t));
ma_d.push(Number(e.gsx$mad.$t));
nz_d.push(Number(e.gsx$nzd.$t));
iq_d.push(Number(e.gsx$iqd.$t));
ee_d.push(Number(e.gsx$eed.$t));
md_d.push(Number(e.gsx$mdd.$t));
si_d.push(Number(e.gsx$sid.$t));
by_d.push(Number(e.gsx$byd.$t));
hk_d.push(Number(e.gsx$hud.$t));
lt_d.push(Number(e.gsx$hkd.$t));
hu_d.push(Number(e.gsx$ltd.$t));
am_d.push(Number(e.gsx$amd.$t));
kw_d.push(Number(e.gsx$kwd.$t));
bh_d.push(Number(e.gsx$bhd.$t));
az_d.push(Number(e.gsx$azd.$t));
ba_d.push(Number(e.gsx$bad.$t));
cm_d.push(Number(e.gsx$kzd.$t));
kz_d.push(Number(e.gsx$cmd.$t));
crz_d.push(Number(e.gsx$crzd.$t));
sk_d.push(Number(e.gsx$skd.$t));
tn_d.push(Number(e.gsx$tnd.$t));
mk_d.push(Number(e.gsx$mkd.$t));
bg_d.push(Number(e.gsx$bgd.$t));
lv_d.push(Number(e.gsx$lvd.$t));
lb_d.push(Number(e.gsx$lbd.$t));
ad_d.push(Number(e.gsx$add.$t));
uz_d.push(Number(e.gsx$uzd.$t));
cy_d.push(Number(e.gsx$cyd.$t));
cr_d.push(Number(e.gsx$crd.$t));
cu_d.push(Number(e.gsx$cud.$t));
uy_d.push(Number(e.gsx$uyd.$t));
af_d.push(Number(e.gsx$afd.$t));
om_d.push(Number(e.gsx$omd.$t));
bf_d.push(Number(e.gsx$bfd.$t));
al_d.push(Number(e.gsx$ald.$t));
ci_d.push(Number(e.gsx$cid.$t));
tw_d.push(Number(e.gsx$twd.$t));
re_d.push(Number(e.gsx$red.$t));
jo_d.push(Number(e.gsx$jod.$t));
uk_ci_d.push(Number(e.gsx$ukcid.$t));
hn_d.push(Number(e.gsx$hnd.$t));
ne_d.push(Number(e.gsx$ned.$t));
gh_d.push(Number(e.gsx$ghd.$t));
sm_d.push(Number(e.gsx$smd.$t));
mt_d.push(Number(e.gsx$mtd.$t));
ng_d.push(Number(e.gsx$ngd.$t));
mu_d.push(Number(e.gsx$mud.$t));
kg_d.push(Number(e.gsx$kgd.$t));
bo_d.push(Number(e.gsx$bod.$t));
ps_d.push(Number(e.gsx$psd.$t));
vn_d.push(Number(e.gsx$vnd.$t));
me_d.push(Number(e.gsx$med.$t));
sn_d.push(Number(e.gsx$snd.$t));
bd_d.push(Number(e.gsx$bdd.$t));
ge_d.push(Number(e.gsx$ged.$t));
lk_d.push(Number(e.gsx$lkd.$t));
yt_d.push(Number(e.gsx$ytd.$t));
fo_d.push(Number(e.gsx$fod.$t));
cg_d.push(Number(e.gsx$cgd.$t));
ke_d.push(Number(e.gsx$ked.$t));
ve_d.push(Number(e.gsx$ved.$t));
gn_d.push(Number(e.gsx$gnd.$t));
im_d.push(Number(e.gsx$imd.$t));
mq_d.push(Number(e.gsx$mqd.$t));
fr_gua_d.push(Number(e.gsx$frguad.$t));
bn_d.push(Number(e.gsx$bnd.$t));
dj_d.push(Number(e.gsx$djd.$t));
gi_d.push(Number(e.gsx$gid.$t));
py_d.push(Number(e.gsx$pyd.$t));
kh_d.push(Number(e.gsx$khd.$t));
rw_d.push(Number(e.gsx$rwd.$t));
tt_d.push(Number(e.gsx$ttd.$t));
sv_d.push(Number(e.gsx$svd.$t));
mg_d.push(Number(e.gsx$mgd.$t));
gt_d.push(Number(e.gsx$gtd.$t));
gf_d.push(Number(e.gsx$gfd.$t));
mc_d.push(Number(e.gsx$mcd.$t));
li_d.push(Number(e.gsx$lid.$t));
aw_d.push(Number(e.gsx$awd.$t));
tg_d.push(Number(e.gsx$tgd.$t));
jm_d.push(Number(e.gsx$jmd.$t));
bb_d.push(Number(e.gsx$bbd.$t));
ml_d.push(Number(e.gsx$mld.$t));
et_d.push(Number(e.gsx$etd.$t));
ug_d.push(Number(e.gsx$ugd.$t));
pf_d.push(Number(e.gsx$pfd.$t));
cd_d.push(Number(e.gsx$cdd.$t));
ky_d.push(Number(e.gsx$kyd.$t));
mo_d.push(Number(e.gsx$mod.$t));
bs_d.push(Number(e.gsx$bsd.$t));
sx_d.push(Number(e.gsx$sxd.$t));
bm_d.push(Number(e.gsx$bmd.$t));
zm_d.push(Number(e.gsx$zmd.$t));
gy_d.push(Number(e.gsx$gyd.$t));
ga_d.push(Number(e.gsx$gad.$t));
er_d.push(Number(e.gsx$erd.$t));
gw_d.push(Number(e.gsx$gwd.$t));
mf_d.push(Number(e.gsx$mfd.$t));
lr_d.push(Number(e.gsx$lrd.$t));
ht_d.push(Number(e.gsx$htd.$t));
bj_d.push(Number(e.gsx$bjd.$t));
tz_d.push(Number(e.gsx$tzd.$t));
mm_d.push(Number(e.gsx$mmd.$t));
ly_d.push(Number(e.gsx$lyd.$t));
ao_d.push(Number(e.gsx$aod.$t));
ag_d.push(Number(e.gsx$agd.$t));
sy_d.push(Number(e.gsx$syd.$t));
mv_d.push(Number(e.gsx$mvd.$t));
gq_d.push(Number(e.gsx$gqd.$t));
fr_new_d.push(Number(e.gsx$frnewd.$t));
mz_d.push(Number(e.gsx$mzd.$t));
mn_d.push(Number(e.gsx$mnd.$t));
na_d.push(Number(e.gsx$nad.$t));
dm_d.push(Number(e.gsx$dmd.$t));
fj_d.push(Number(e.gsx$fjd.$t));
la_d.push(Number(e.gsx$lad.$t));
sd_d.push(Number(e.gsx$sdd.$t));
cw_d.push(Number(e.gsx$cwd.$t));
lc_d.push(Number(e.gsx$lcd.$t));
so_d.push(Number(e.gsx$sod.$t));
gd_d.push(Number(e.gsx$gdd.$t));
sz_d.push(Number(e.gsx$szd.$t));
zw_d.push(Number(e.gsx$zwd.$t));
gl_d.push(Number(e.gsx$gld.$t));
kn_d.push(Number(e.gsx$knd.$t));
sc_d.push(Number(e.gsx$scd.$t));
sr_d.push(Number(e.gsx$srd.$t));
td_d.push(Number(e.gsx$tdd.$t));
np_d.push(Number(e.gsx$npd.$t));
ms_d.push(Number(e.gsx$msd.$t));
bz_d.push(Number(e.gsx$bzd.$t));
mw_d.push(Number(e.gsx$mwd.$t));
tc_d.push(Number(e.gsx$tcd.$t));
cf_d.push(Number(e.gsx$cfd.$t));
va_d.push(Number(e.gsx$vad.$t));
vc_d.push(Number(e.gsx$vcd.$t));
cv_d.push(Number(e.gsx$cvd.$t));
sl_d.push(Number(e.gsx$sld.$t));
bw_d.push(Number(e.gsx$bwd.$t));
mr_d.push(Number(e.gsx$mrd.$t));
ni_d.push(Number(e.gsx$nid.$t));
bl_d.push(Number(e.gsx$bld.$t));
bt_d.push(Number(e.gsx$btd.$t));
fk_d.push(Number(e.gsx$fkd.$t));
gm_d.push(Number(e.gsx$gmd.$t));
st_d.push(Number(e.gsx$std.$t));
eh_d.push(Number(e.gsx$ehd.$t));
ai_d.push(Number(e.gsx$aid.$t));
vg_d.push(Number(e.gsx$vgd.$t));
bi_d.push(Number(e.gsx$bid.$t));
nl_d.push(Number(e.gsx$nld.$t));
pg_d.push(Number(e.gsx$pgd.$t));
ss_d.push(Number(e.gsx$ssd.$t));
pm_d.push(Number(e.gsx$pmd.$t));
tl_d.push(Number(e.gsx$tld.$t));





  });
  
    
  /*  
    
//ico.forEach((val) => {

  $(`#sparkline_${'ico'}_c`).sparkline(`${'ico'}`, {
    type: "bar",
      barColor: '#fc3944',
      tooltipFormat: '{{offset:offset}} {{value}}',
      tooltipValueLookups: {
        'offset': labels
      }
  });

//    });  
   
    
  */  
    
    
      /*  
      
      /// orignial 
   
  $('#sparkline_us_c').sparkline(us, {
    type: "bar",
      width: '100%',
  height: 100,
  barWidth: 5,
  barSpacing: 1,
barColor: '#d67f29',
fillColor: 'rgba(214, 127, 41,0.2)',
    tooltipSuffix: " Cases",
        tooltipFormat: '{{offset:offset}} {{value}}',
tooltipValueLookups: {
        'offset': labels
    }
});



  $('#sparkline_us_d').sparkline(us_d, {
    type: "bar",
      width: '100%',
  height: 100,
  barWidth: 5,
  barSpacing: 1,
barColor: '#fc3944',
fillColor: 'rgba(214, 127, 41,0.2)',
    tooltipSuffix: " Cases",
        tooltipFormat: '{{offset:offset}} {{value}}',
tooltipValueLookups: {
        'offset': labels
    }
});







*/
    
    
    
    
    
    
   /////// cases scripts start ////////
   
   
   $('#sparkline_us_c').sparkline(us, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_es_c').sparkline(es, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_wrld_c').sparkline(wrld, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_it_c').sparkline(it, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fr_c').sparkline(fr, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_de_c').sparkline(de, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cn_c').sparkline(cn, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ir_c').sparkline(ir, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_uk_c').sparkline(uk, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tr_c').sparkline(tr, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_be_c').sparkline(be, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ch_c').sparkline(ch, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_nl_c').sparkline(nl, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ca_c').sparkline(ca, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_br_c').sparkline(br, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pt_c').sparkline(pt, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_at_c').sparkline(at, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kr_c').sparkline(kr, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ru_c').sparkline(ru, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_il_c').sparkline(il, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_se_c').sparkline(se, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ind_c').sparkline(ind, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ie_c').sparkline(ie, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_no_c').sparkline(no, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_au_c').sparkline(au, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cl_c').sparkline(cl, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dk_c').sparkline(dk, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pl_c').sparkline(pl, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cz_c').sparkline(cz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pe_c').sparkline(pe, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ro_c').sparkline(ro, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ec_c').sparkline(ec, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_jp_c').sparkline(jp, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pk_c').sparkline(pk, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_my_c').sparkline(my, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ph_c').sparkline(ph, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_id_c').sparkline(id, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sa_c').sparkline(sa, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mx_c').sparkline(mx, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lu_c').sparkline(lu, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cs_c').sparkline(cs, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ae_c').sparkline(ae, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fi_c').sparkline(fi, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pa_c').sparkline(pa, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_th_c').sparkline(th, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_qa_c').sparkline(qa, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dom_c').sparkline(dom, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_co_c').sparkline(co, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gr_c').sparkline(gr, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_za_c').sparkline(za, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sg_c').sparkline(sg, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ua_c').sparkline(ua, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ar_c').sparkline(ar, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_eg_c').sparkline(eg, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dz_c').sparkline(dz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_is_c').sparkline(is, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_by_c').sparkline(by, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_hr_c').sparkline(hr, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ma_c').sparkline(ma, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_md_c').sparkline(md, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_nz_c').sparkline(nz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_iq_c').sparkline(iq, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ee_c').sparkline(ee, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_si_c').sparkline(si, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_hu_c').sparkline(hu, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_hk_c').sparkline(hk, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lt_c').sparkline(lt, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_az_c').sparkline(az, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_am_c').sparkline(am, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kw_c').sparkline(kw, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bh_c').sparkline(bh, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ba_c').sparkline(ba, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kz_c').sparkline(kz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cm_c').sparkline(cm, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_crz_c').sparkline(crz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sk_c').sparkline(sk, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mk_c').sparkline(mk, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tn_c').sparkline(tn, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bg_c').sparkline(bg, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lv_c').sparkline(lv, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ad_c').sparkline(ad, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lb_c').sparkline(lb, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_uz_c').sparkline(uz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cy_c').sparkline(cy, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cr_c').sparkline(cr, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cu_c').sparkline(cu, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_af_c').sparkline(af, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_om_c').sparkline(om, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_uy_c').sparkline(uy, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ci_c').sparkline(ci, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bf_c').sparkline(bf, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_al_c').sparkline(al, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tw_c').sparkline(tw, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_jo_c').sparkline(jo, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_re_c').sparkline(re, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_uk_ci_c').sparkline(uk_ci, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_hn_c').sparkline(hn, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ne_c').sparkline(ne, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mt_c').sparkline(mt, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sm_c').sparkline(sm, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bd_c').sparkline(bd, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mu_c').sparkline(mu, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gh_c').sparkline(gh, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kg_c').sparkline(kg, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ng_c').sparkline(ng, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bo_c').sparkline(bo, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ps_c').sparkline(ps, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_vn_c').sparkline(vn, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_me_c').sparkline(me, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sn_c').sparkline(sn, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ge_c').sparkline(ge, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gn_c').sparkline(gn, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lk_c').sparkline(lk, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_im_c').sparkline(im, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ke_c').sparkline(ke, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_yt_c').sparkline(yt, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fo_c').sparkline(fo, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cg_c').sparkline(cg, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ve_c').sparkline(ve, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mq_c').sparkline(mq, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fr_gua_c').sparkline(fr_gua, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bn_c').sparkline(bn, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dj_c').sparkline(dj, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_py_c').sparkline(py, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gi_c').sparkline(gi, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kh_c').sparkline(kh, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_rw_c').sparkline(rw, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tt_c').sparkline(tt, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sv_c').sparkline(sv, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gt_c').sparkline(gt, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mg_c').sparkline(mg, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mc_c').sparkline(mc, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gf_c').sparkline(gf, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_aw_c').sparkline(aw, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_li_c').sparkline(li, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ml_c').sparkline(ml, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tg_c').sparkline(tg, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_jm_c').sparkline(jm, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bb_c').sparkline(bb, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cd_c').sparkline(cd, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_et_c').sparkline(et, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ug_c').sparkline(ug, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pf_c').sparkline(pf, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ky_c').sparkline(ky, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mo_c').sparkline(mo, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ga_c').sparkline(ga, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sx_c').sparkline(sx, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bs_c').sparkline(bs, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bm_c').sparkline(bm, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_zm_c').sparkline(zm, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gy_c').sparkline(gy, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gw_c').sparkline(gw, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_er_c').sparkline(er, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mf_c').sparkline(mf, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lr_c').sparkline(lr, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ht_c').sparkline(ht, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bj_c').sparkline(bj, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tz_c').sparkline(tz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ly_c').sparkline(ly, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mm_c').sparkline(mm, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ao_c').sparkline(ao, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ag_c').sparkline(ag, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sy_c').sparkline(sy, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mv_c').sparkline(mv, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gq_c').sparkline(gq, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fr_new_c').sparkline(fr_new, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mz_c').sparkline(mz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_la_c').sparkline(la, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mn_c').sparkline(mn, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_na_c').sparkline(na, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sd_c').sparkline(sd, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dm_c').sparkline(dm, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fj_c').sparkline(fj, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cw_c').sparkline(cw, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lc_c').sparkline(lc, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bw_c').sparkline(bw, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_so_c').sparkline(so, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gd_c').sparkline(gd, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sz_c').sparkline(sz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_zw_c').sparkline(zw, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_td_c').sparkline(td, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gl_c').sparkline(gl, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kn_c').sparkline(kn, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sc_c').sparkline(sc, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sr_c').sparkline(sr, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bz_c').sparkline(bz, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_np_c').sparkline(np, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ms_c').sparkline(ms, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mw_c').sparkline(mw, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tc_c').sparkline(tc, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cf_c').sparkline(cf, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_va_c').sparkline(va, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_vc_c').sparkline(vc, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cv_c').sparkline(cv, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mr_c').sparkline(mr, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ni_c').sparkline(ni, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sl_c').sparkline(sl, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bl_c').sparkline(bl, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bt_c').sparkline(bt, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fk_c').sparkline(fk, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gm_c').sparkline(gm, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_st_c').sparkline(st, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_eh_c').sparkline(eh, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ai_c').sparkline(ai, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_vg_c').sparkline(vg, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bi_c').sparkline(bi, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ss_c').sparkline(ss, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_nl_c').sparkline(nl, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pg_c').sparkline(pg, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pm_c').sparkline(pm, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tl_c').sparkline(tl, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
   

      /////// cases scripts end //////// 
    
    
    
    
    
  /////// deaths scripts start ////////

$('#sparkline_us_d').sparkline(us_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_es_d').sparkline(es_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_wrld_d').sparkline(wrld_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_it_d').sparkline(it_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fr_d').sparkline(fr_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_de_d').sparkline(de_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cn_d').sparkline(cn_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ir_d').sparkline(ir_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_uk_d').sparkline(uk_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tr_d').sparkline(tr_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_be_d').sparkline(be_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ch_d').sparkline(ch_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_nl_d').sparkline(nl_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ca_d').sparkline(ca_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_br_d').sparkline(br_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pt_d').sparkline(pt_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_at_d').sparkline(at_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kr_d').sparkline(kr_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ru_d').sparkline(ru_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_il_d').sparkline(il_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_se_d').sparkline(se_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ind_d').sparkline(ind_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ie_d').sparkline(ie_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_no_d').sparkline(no_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_au_d').sparkline(au_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cl_d').sparkline(cl_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dk_d').sparkline(dk_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pl_d').sparkline(pl_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cz_d').sparkline(cz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pe_d').sparkline(pe_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ro_d').sparkline(ro_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ec_d').sparkline(ec_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_jp_d').sparkline(jp_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pk_d').sparkline(pk_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_my_d').sparkline(my_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ph_d').sparkline(ph_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_id_d').sparkline(id_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sa_d').sparkline(sa_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mx_d').sparkline(mx_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lu_d').sparkline(lu_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cs_d').sparkline(cs_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ae_d').sparkline(ae_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fi_d').sparkline(fi_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pa_d').sparkline(pa_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_th_d').sparkline(th_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_qa_d').sparkline(qa_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dom_d').sparkline(dom_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_co_d').sparkline(co_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gr_d').sparkline(gr_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_za_d').sparkline(za_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sg_d').sparkline(sg_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ua_d').sparkline(ua_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ar_d').sparkline(ar_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_eg_d').sparkline(eg_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dz_d').sparkline(dz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_is_d').sparkline(is_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_by_d').sparkline(by_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_hr_d').sparkline(hr_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ma_d').sparkline(ma_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_md_d').sparkline(md_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_nz_d').sparkline(nz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_iq_d').sparkline(iq_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ee_d').sparkline(ee_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_si_d').sparkline(si_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_hu_d').sparkline(hu_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_hk_d').sparkline(hk_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lt_d').sparkline(lt_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_az_d').sparkline(az_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_am_d').sparkline(am_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kw_d').sparkline(kw_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bh_d').sparkline(bh_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ba_d').sparkline(ba_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kz_d').sparkline(kz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cm_d').sparkline(cm_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_crz_d').sparkline(crz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sk_d').sparkline(sk_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mk_d').sparkline(mk_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tn_d').sparkline(tn_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bg_d').sparkline(bg_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lv_d').sparkline(lv_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ad_d').sparkline(ad_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lb_d').sparkline(lb_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_uz_d').sparkline(uz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cy_d').sparkline(cy_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cr_d').sparkline(cr_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cu_d').sparkline(cu_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_af_d').sparkline(af_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_om_d').sparkline(om_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_uy_d').sparkline(uy_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ci_d').sparkline(ci_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bf_d').sparkline(bf_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_al_d').sparkline(al_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tw_d').sparkline(tw_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_jo_d').sparkline(jo_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_re_d').sparkline(re_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_uk_ci_d').sparkline(uk_ci_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_hn_d').sparkline(hn_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ne_d').sparkline(ne_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mt_d').sparkline(mt_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sm_d').sparkline(sm_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bd_d').sparkline(bd_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mu_d').sparkline(mu_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gh_d').sparkline(gh_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kg_d').sparkline(kg_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ng_d').sparkline(ng_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bo_d').sparkline(bo_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ps_d').sparkline(ps_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_vn_d').sparkline(vn_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_me_d').sparkline(me_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sn_d').sparkline(sn_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ge_d').sparkline(ge_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gn_d').sparkline(gn_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lk_d').sparkline(lk_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_im_d').sparkline(im_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ke_d').sparkline(ke_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_yt_d').sparkline(yt_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fo_d').sparkline(fo_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cg_d').sparkline(cg_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ve_d').sparkline(ve_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mq_d').sparkline(mq_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fr_gua_d').sparkline(fr_gua_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bn_d').sparkline(bn_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dj_d').sparkline(dj_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_py_d').sparkline(py_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gi_d').sparkline(gi_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kh_d').sparkline(kh_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_rw_d').sparkline(rw_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tt_d').sparkline(tt_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sv_d').sparkline(sv_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gt_d').sparkline(gt_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mg_d').sparkline(mg_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mc_d').sparkline(mc_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gf_d').sparkline(gf_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_aw_d').sparkline(aw_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_li_d').sparkline(li_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ml_d').sparkline(ml_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tg_d').sparkline(tg_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_jm_d').sparkline(jm_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bb_d').sparkline(bb_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cd_d').sparkline(cd_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_et_d').sparkline(et_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ug_d').sparkline(ug_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pf_d').sparkline(pf_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ky_d').sparkline(ky_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mo_d').sparkline(mo_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ga_d').sparkline(ga_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sx_d').sparkline(sx_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bs_d').sparkline(bs_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bm_d').sparkline(bm_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_zm_d').sparkline(zm_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gy_d').sparkline(gy_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gw_d').sparkline(gw_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_er_d').sparkline(er_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mf_d').sparkline(mf_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lr_d').sparkline(lr_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ht_d').sparkline(ht_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bj_d').sparkline(bj_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tz_d').sparkline(tz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ly_d').sparkline(ly_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mm_d').sparkline(mm_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ao_d').sparkline(ao_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ag_d').sparkline(ag_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sy_d').sparkline(sy_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mv_d').sparkline(mv_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gq_d').sparkline(gq_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fr_new_d').sparkline(fr_new_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mz_d').sparkline(mz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_la_d').sparkline(la_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mn_d').sparkline(mn_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_na_d').sparkline(na_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sd_d').sparkline(sd_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_dm_d').sparkline(dm_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fj_d').sparkline(fj_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cw_d').sparkline(cw_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_lc_d').sparkline(lc_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bw_d').sparkline(bw_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_so_d').sparkline(so_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gd_d').sparkline(gd_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sz_d').sparkline(sz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_zw_d').sparkline(zw_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_td_d').sparkline(td_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gl_d').sparkline(gl_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_kn_d').sparkline(kn_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sc_d').sparkline(sc_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sr_d').sparkline(sr_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bz_d').sparkline(bz_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_np_d').sparkline(np_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ms_d').sparkline(ms_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mw_d').sparkline(mw_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tc_d').sparkline(tc_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cf_d').sparkline(cf_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_va_d').sparkline(va_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_vc_d').sparkline(vc_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_cv_d').sparkline(cv_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_mr_d').sparkline(mr_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ni_d').sparkline(ni_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_sl_d').sparkline(sl_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bl_d').sparkline(bl_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bt_d').sparkline(bt_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_fk_d').sparkline(fk_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_gm_d').sparkline(gm_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_st_d').sparkline(st_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_eh_d').sparkline(eh_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ai_d').sparkline(ai_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_vg_d').sparkline(vg_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_bi_d').sparkline(bi_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_ss_d').sparkline(ss_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_nl_d').sparkline(nl_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pg_d').sparkline(pg_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_pm_d').sparkline(pm_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });
$('#sparkline_tl_d').sparkline(tl_d, {type: "bar", width: '100%', height: 100, barWidth: 5, barSpacing: 1, barColor: '#d67f29', fillColor: 'rgba(214, 127, 41,0.2)', tooltipSuffix: " Cases", tooltipFormat: '{{offset:offset}} {{value}}', tooltipValueLookups: { 'offset': labels} });





  /////// deaths scripts end ////////




   });

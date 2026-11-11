// Offline support for the home-screen web app. build.mjs fills in the names below.
// - SHELL: the small app files of this release, installed together.
// - LAZY: big files with content-hashed names (HWP engine, PPT and PDF renderers). Cached the first time
//   they are used, or when the user asks in 정보, and kept across releases while still needed.
// Documents are never fetched from the network, so they are never cached.
const VERSION = '02e4ef32f7ee';
const SHELL_CACHE = `folio-shell-${VERSION}`;
const ASSET_CACHE = 'folio-assets';
const SHELL = ["./","UTIF-CUOKVZTG.js","about-ABKJTX3S.js","aes-HQHILQVD.js","app.js","apple-touch-icon.png","archive-YJILFSNZ.js","chunk-AYNTO6YH.js","chunk-BM7IVJBA.js","chunk-COJFBH2P.js","chunk-EGZDKFLF.js","chunk-EJWUCE36.js","chunk-FUJEICCA.js","chunk-FWH32XIL.js","chunk-GLBQGQM6.js","chunk-J3SMTYDZ.js","chunk-JSRE55Y4.js","chunk-JVZTVLCX.js","chunk-K2MGY3LR.js","chunk-M76RZVUZ.js","chunk-OCFNYQGT.js","chunk-Q6ZRMQUM.js","chunk-QRE7E2GI.js","chunk-RDKZCXSA.js","chunk-RQ7BR24V.js","chunk-S5YEBETU.js","chunk-SLTV4PDC.js","chunk-VNHOLOE4.js","chunk-VU2R4JIL.js","chunk-WUR75VIF.js","chunk-WXW5ZFM5.js","chunk-XP3BNQPI.js","chunk-Y6URMNV2.js","chunk-Z4VM6G2G.js","diff-YYYGDWIB.js","doc-info-EBFKHQM3.js","docx-WXAIBVUO.js","email-LNANK5YE.js","encrypted-NHGYWQGQ.js","epub-Z23YWIGU.js","extract-images-ILLSGJAD.js","find-LUT7TYZW.js","html-4FKIHFWB.js","hwp-KACLYH65.js","i18n-AQAF5ZDP.js","icon-192.png","icon-512.png","icon-maskable-512.png","image-P72LAL3X.js","inflate-DRRO4CZE.js","jpeg-pdf-VLYWDXQR.js","jszip.min-ETSSBAKK.js","legacy-BNHCTCAQ.js","libarchive-4OK6UJVL.js","manifest.webmanifest","markdown-2FSALZ2B.js","ocr-2HBECKKV.js","odf-2ANIJJHJ.js","pages-MZLY3KLT.js","pako-PBVWCJRH.js","print-3YDDOFSR.js","reader-view-D6AXGUT5.js","scan-425CYVBQ.js","select-translate-ZWZQSUYD.js","sharpen-YPLEIASK.js","sheet-ZBRBVQUS.js","slim-zip-DRJ2MULV.js","speak-RGMXPY5I.js","src-4YHVY2LM.js","style.css","tables-WJH7MTD4.js","text-A57RXPSK.js","theme.js","translate-4HJC4S5D.js","translate-view-T2MFERWL.js","xlsx-ZZR4N2SW.js"];
const LAZY = ["archive-worker-97a339eb1a17.js","es-7F7WX4TP.js","heic-7OJ7KBCP.js","libarchive-8a66066ed3ea.wasm","pdf-BL6VRH3Z.js","pdf-ops-ATIOJEFX.js","pdf-tools-LPL7QZVE.js","pdf-worker-b4c8353ded0d.js","pptx-IULLQ6PU.js","rhwp_bg-54cf95014312.wasm","ocr-fdc08a9e0620/worker.min.js","ocr-fdc08a9e0620/tesseract-core-simd-lstm.js","ocr-fdc08a9e0620/tesseract-core-simd-lstm.wasm","ocr-fdc08a9e0620/tesseract-core-lstm.js","ocr-fdc08a9e0620/tesseract-core-lstm.wasm","ocr-fdc08a9e0620/kor.traineddata.gz","ocr-fdc08a9e0620/eng.traineddata.gz","ocr-fdc08a9e0620/jpn.traineddata.gz","ocr-fdc08a9e0620/chi_sim.traineddata.gz","translate-97fa99e24b49/translator-worker.js","translate-97fa99e24b49/bergamot-translator-worker.js","translate-97fa99e24b49/bergamot-translator-worker.wasm"];
// Release-specific files that are rarely needed (the ~1 MB license data behind 정보, the character
// maps and fonts only some PDFs ask for): kept with the shell once fetched, instead of being
// downloaded up front.
const ON_DEMAND = ["licenses.json","pdf/cmaps/78-EUC-H.bcmap","pdf/cmaps/78-EUC-V.bcmap","pdf/cmaps/78-H.bcmap","pdf/cmaps/78-RKSJ-H.bcmap","pdf/cmaps/78-RKSJ-V.bcmap","pdf/cmaps/78-V.bcmap","pdf/cmaps/78ms-RKSJ-H.bcmap","pdf/cmaps/78ms-RKSJ-V.bcmap","pdf/cmaps/83pv-RKSJ-H.bcmap","pdf/cmaps/90ms-RKSJ-H.bcmap","pdf/cmaps/90ms-RKSJ-V.bcmap","pdf/cmaps/90msp-RKSJ-H.bcmap","pdf/cmaps/90msp-RKSJ-V.bcmap","pdf/cmaps/90pv-RKSJ-H.bcmap","pdf/cmaps/90pv-RKSJ-V.bcmap","pdf/cmaps/Add-H.bcmap","pdf/cmaps/Add-RKSJ-H.bcmap","pdf/cmaps/Add-RKSJ-V.bcmap","pdf/cmaps/Add-V.bcmap","pdf/cmaps/Adobe-CNS1-0.bcmap","pdf/cmaps/Adobe-CNS1-1.bcmap","pdf/cmaps/Adobe-CNS1-2.bcmap","pdf/cmaps/Adobe-CNS1-3.bcmap","pdf/cmaps/Adobe-CNS1-4.bcmap","pdf/cmaps/Adobe-CNS1-5.bcmap","pdf/cmaps/Adobe-CNS1-6.bcmap","pdf/cmaps/Adobe-CNS1-UCS2.bcmap","pdf/cmaps/Adobe-GB1-0.bcmap","pdf/cmaps/Adobe-GB1-1.bcmap","pdf/cmaps/Adobe-GB1-2.bcmap","pdf/cmaps/Adobe-GB1-3.bcmap","pdf/cmaps/Adobe-GB1-4.bcmap","pdf/cmaps/Adobe-GB1-5.bcmap","pdf/cmaps/Adobe-GB1-UCS2.bcmap","pdf/cmaps/Adobe-Japan1-0.bcmap","pdf/cmaps/Adobe-Japan1-1.bcmap","pdf/cmaps/Adobe-Japan1-2.bcmap","pdf/cmaps/Adobe-Japan1-3.bcmap","pdf/cmaps/Adobe-Japan1-4.bcmap","pdf/cmaps/Adobe-Japan1-5.bcmap","pdf/cmaps/Adobe-Japan1-6.bcmap","pdf/cmaps/Adobe-Japan1-UCS2.bcmap","pdf/cmaps/Adobe-Korea1-0.bcmap","pdf/cmaps/Adobe-Korea1-1.bcmap","pdf/cmaps/Adobe-Korea1-2.bcmap","pdf/cmaps/Adobe-Korea1-UCS2.bcmap","pdf/cmaps/B5-H.bcmap","pdf/cmaps/B5-V.bcmap","pdf/cmaps/B5pc-H.bcmap","pdf/cmaps/B5pc-V.bcmap","pdf/cmaps/CNS-EUC-H.bcmap","pdf/cmaps/CNS-EUC-V.bcmap","pdf/cmaps/CNS1-H.bcmap","pdf/cmaps/CNS1-V.bcmap","pdf/cmaps/CNS2-H.bcmap","pdf/cmaps/CNS2-V.bcmap","pdf/cmaps/ETHK-B5-H.bcmap","pdf/cmaps/ETHK-B5-V.bcmap","pdf/cmaps/ETen-B5-H.bcmap","pdf/cmaps/ETen-B5-V.bcmap","pdf/cmaps/ETenms-B5-H.bcmap","pdf/cmaps/ETenms-B5-V.bcmap","pdf/cmaps/EUC-H.bcmap","pdf/cmaps/EUC-V.bcmap","pdf/cmaps/Ext-H.bcmap","pdf/cmaps/Ext-RKSJ-H.bcmap","pdf/cmaps/Ext-RKSJ-V.bcmap","pdf/cmaps/Ext-V.bcmap","pdf/cmaps/GB-EUC-H.bcmap","pdf/cmaps/GB-EUC-V.bcmap","pdf/cmaps/GB-H.bcmap","pdf/cmaps/GB-V.bcmap","pdf/cmaps/GBK-EUC-H.bcmap","pdf/cmaps/GBK-EUC-V.bcmap","pdf/cmaps/GBK2K-H.bcmap","pdf/cmaps/GBK2K-V.bcmap","pdf/cmaps/GBKp-EUC-H.bcmap","pdf/cmaps/GBKp-EUC-V.bcmap","pdf/cmaps/GBT-EUC-H.bcmap","pdf/cmaps/GBT-EUC-V.bcmap","pdf/cmaps/GBT-H.bcmap","pdf/cmaps/GBT-V.bcmap","pdf/cmaps/GBTpc-EUC-H.bcmap","pdf/cmaps/GBTpc-EUC-V.bcmap","pdf/cmaps/GBpc-EUC-H.bcmap","pdf/cmaps/GBpc-EUC-V.bcmap","pdf/cmaps/H.bcmap","pdf/cmaps/HKdla-B5-H.bcmap","pdf/cmaps/HKdla-B5-V.bcmap","pdf/cmaps/HKdlb-B5-H.bcmap","pdf/cmaps/HKdlb-B5-V.bcmap","pdf/cmaps/HKgccs-B5-H.bcmap","pdf/cmaps/HKgccs-B5-V.bcmap","pdf/cmaps/HKm314-B5-H.bcmap","pdf/cmaps/HKm314-B5-V.bcmap","pdf/cmaps/HKm471-B5-H.bcmap","pdf/cmaps/HKm471-B5-V.bcmap","pdf/cmaps/HKscs-B5-H.bcmap","pdf/cmaps/HKscs-B5-V.bcmap","pdf/cmaps/Hankaku.bcmap","pdf/cmaps/Hiragana.bcmap","pdf/cmaps/KSC-EUC-H.bcmap","pdf/cmaps/KSC-EUC-V.bcmap","pdf/cmaps/KSC-H.bcmap","pdf/cmaps/KSC-Johab-H.bcmap","pdf/cmaps/KSC-Johab-V.bcmap","pdf/cmaps/KSC-V.bcmap","pdf/cmaps/KSCms-UHC-H.bcmap","pdf/cmaps/KSCms-UHC-HW-H.bcmap","pdf/cmaps/KSCms-UHC-HW-V.bcmap","pdf/cmaps/KSCms-UHC-V.bcmap","pdf/cmaps/KSCpc-EUC-H.bcmap","pdf/cmaps/KSCpc-EUC-V.bcmap","pdf/cmaps/Katakana.bcmap","pdf/cmaps/NWP-H.bcmap","pdf/cmaps/NWP-V.bcmap","pdf/cmaps/RKSJ-H.bcmap","pdf/cmaps/RKSJ-V.bcmap","pdf/cmaps/Roman.bcmap","pdf/cmaps/UniCNS-UCS2-H.bcmap","pdf/cmaps/UniCNS-UCS2-V.bcmap","pdf/cmaps/UniCNS-UTF16-H.bcmap","pdf/cmaps/UniCNS-UTF16-V.bcmap","pdf/cmaps/UniCNS-UTF32-H.bcmap","pdf/cmaps/UniCNS-UTF32-V.bcmap","pdf/cmaps/UniCNS-UTF8-H.bcmap","pdf/cmaps/UniCNS-UTF8-V.bcmap","pdf/cmaps/UniGB-UCS2-H.bcmap","pdf/cmaps/UniGB-UCS2-V.bcmap","pdf/cmaps/UniGB-UTF16-H.bcmap","pdf/cmaps/UniGB-UTF16-V.bcmap","pdf/cmaps/UniGB-UTF32-H.bcmap","pdf/cmaps/UniGB-UTF32-V.bcmap","pdf/cmaps/UniGB-UTF8-H.bcmap","pdf/cmaps/UniGB-UTF8-V.bcmap","pdf/cmaps/UniJIS-UCS2-H.bcmap","pdf/cmaps/UniJIS-UCS2-HW-H.bcmap","pdf/cmaps/UniJIS-UCS2-HW-V.bcmap","pdf/cmaps/UniJIS-UCS2-V.bcmap","pdf/cmaps/UniJIS-UTF16-H.bcmap","pdf/cmaps/UniJIS-UTF16-V.bcmap","pdf/cmaps/UniJIS-UTF32-H.bcmap","pdf/cmaps/UniJIS-UTF32-V.bcmap","pdf/cmaps/UniJIS-UTF8-H.bcmap","pdf/cmaps/UniJIS-UTF8-V.bcmap","pdf/cmaps/UniJIS2004-UTF16-H.bcmap","pdf/cmaps/UniJIS2004-UTF16-V.bcmap","pdf/cmaps/UniJIS2004-UTF32-H.bcmap","pdf/cmaps/UniJIS2004-UTF32-V.bcmap","pdf/cmaps/UniJIS2004-UTF8-H.bcmap","pdf/cmaps/UniJIS2004-UTF8-V.bcmap","pdf/cmaps/UniJISPro-UCS2-HW-V.bcmap","pdf/cmaps/UniJISPro-UCS2-V.bcmap","pdf/cmaps/UniJISPro-UTF8-V.bcmap","pdf/cmaps/UniJISX0213-UTF32-H.bcmap","pdf/cmaps/UniJISX0213-UTF32-V.bcmap","pdf/cmaps/UniJISX02132004-UTF32-H.bcmap","pdf/cmaps/UniJISX02132004-UTF32-V.bcmap","pdf/cmaps/UniKS-UCS2-H.bcmap","pdf/cmaps/UniKS-UCS2-V.bcmap","pdf/cmaps/UniKS-UTF16-H.bcmap","pdf/cmaps/UniKS-UTF16-V.bcmap","pdf/cmaps/UniKS-UTF32-H.bcmap","pdf/cmaps/UniKS-UTF32-V.bcmap","pdf/cmaps/UniKS-UTF8-H.bcmap","pdf/cmaps/UniKS-UTF8-V.bcmap","pdf/cmaps/V.bcmap","pdf/cmaps/WP-Symbol.bcmap","pdf/standard_fonts/FoxitDingbats.pfb","pdf/standard_fonts/FoxitFixed.pfb","pdf/standard_fonts/FoxitFixedBold.pfb","pdf/standard_fonts/FoxitFixedBoldItalic.pfb","pdf/standard_fonts/FoxitFixedItalic.pfb","pdf/standard_fonts/FoxitSerif.pfb","pdf/standard_fonts/FoxitSerifBold.pfb","pdf/standard_fonts/FoxitSerifBoldItalic.pfb","pdf/standard_fonts/FoxitSerifItalic.pfb","pdf/standard_fonts/FoxitSymbol.pfb","pdf/standard_fonts/LiberationSans-Bold.ttf","pdf/standard_fonts/LiberationSans-BoldItalic.ttf","pdf/standard_fonts/LiberationSans-Italic.ttf","pdf/standard_fonts/LiberationSans-Regular.ttf","pdf/wasm/jbig2.wasm","pdf/wasm/openjpeg.wasm","pdf/wasm/qcms_bg.wasm"];
// The SHA-256 of every file this release can serve, by path. Every cached copy is checked each time
// it's served (anything else on this origin can write to Cache Storage at any moment); one that
// doesn't match is thrown away and fetched again.
const HASHES = {"./":"900d5c3b9ae7dc9c281e24929a2184c934a82a64a91087bb389633a97e3d3b78","UTIF-CUOKVZTG.js":"1b78b8895613b06a05ff94dd3fce8b12479ff82feacebc90f2c414da989cdfd7","about-ABKJTX3S.js":"ab53b426b5fbb0b44adb27e9ff83315ecd4705480a4cec887c69a47585adfc57","aes-HQHILQVD.js":"ff13698b3662b21ba4f42ab6d405cd2a93e1cbd7cdbb2c5bb57137aedb4efd38","app.js":"5d78773f1cf5b92785b19d9b477309200f4e20bfecd1e4b855bc95f8d925931b","apple-touch-icon.png":"015950e0a24aad2c23fcdf6c0c70111481f74426da63878f9824e43c9b5b474a","archive-YJILFSNZ.js":"9f4f5c15decb4bb269beaeda423337204efa8540290b685875821d3df8cad9c7","chunk-AYNTO6YH.js":"3d0859c1f610dc73a9cfcbdb1b6c38b2ba72a09a39eb11e1c95475d69da84e30","chunk-BM7IVJBA.js":"02f079ad2c15e700c268999e657744bcda6d46f851154ba56532712105bdc9ee","chunk-COJFBH2P.js":"4ccb00c8ae00c82aef980afaca5732174defe3ff6c00bc74a67caf8ba1b82e92","chunk-EGZDKFLF.js":"b223e37bfbdaa9f3fb8db7ee035cb80bf28e92b74246b95876f3afd17ba6026b","chunk-EJWUCE36.js":"add0e444de51ce60e46195e4401ac294f3386e2cc83b5e625faf53b90254d832","chunk-FUJEICCA.js":"dac7369021998576498f260263820ae4b2182b989e23d3fec90a77e8db5eb5ce","chunk-FWH32XIL.js":"b99845f2d79898294f9feede23357843275a07142aeb0c53e2ec01daa5c8a0a0","chunk-GLBQGQM6.js":"531c0b1ccb23bc473fc34af44ae35ec3a4053c4bf037f5393a48fb8f96769039","chunk-J3SMTYDZ.js":"2cb2ab0325bdbf0c2b3f3ec169fd6f940cef185aaf6570713039a5725437f071","chunk-JSRE55Y4.js":"bda494579e85770eb2775544b332023c9b50a02280f45feebd5699ba85789ff4","chunk-JVZTVLCX.js":"f4920ae74b63eefa49b133eb2931f58974f57d5f215b0cce4f32d5b07a8e289f","chunk-K2MGY3LR.js":"e5fa2b9f665ce729baa958c6b115797c5d35d905551442b08bf97e76c7ad3072","chunk-M76RZVUZ.js":"994df7a1cd6c15b1c05d50e6d824c822c1a3db312cb0870fb839be2fce62afae","chunk-OCFNYQGT.js":"70027cc81dd4a0807e9938f74b904aea7215c33fccece9b62aa7d3f9d395a817","chunk-Q6ZRMQUM.js":"5c0820021361be4b4d7a3f518670a982dea49989c14d8904e5f98e6f9694888d","chunk-QRE7E2GI.js":"1f9c9fddd3d4d25498be1ceee05b129f7e7798c2e12f7e3cbb24c2420e3048cb","chunk-RDKZCXSA.js":"a5eadbffe03e3aa2d80800dcc42e2e5a9c262320a925948a6cf078c70fc21472","chunk-RQ7BR24V.js":"9fdd738b8f983d374ce64349fe362e8c807c612a139335b70bb672c765860e83","chunk-S5YEBETU.js":"14468a7b39ddeb88f340878dee7adb858019a218b2509c32f62256dc6d27490d","chunk-SLTV4PDC.js":"54c8fc8d8b010b1c458d0233b990a1e4b910f093b81ce30c53c020fd3951daf9","chunk-VNHOLOE4.js":"1a1169f667ac7d68c0e9000677fc5cafff4524ddac874ad46ccc1cb5050c7689","chunk-VU2R4JIL.js":"f98b434b060e462db4903a7ea20fe1934b403fac4c82cc94171e638d5a637da2","chunk-WUR75VIF.js":"f70b86b42387c665f8cc73ac5aa4514c67308d465c21e4f2d4728fd88a90f8ce","chunk-WXW5ZFM5.js":"b8e31dfca3400a3b28c374cac8677fa57e5effab7eb3d37241b758187a38d1e0","chunk-XP3BNQPI.js":"e5a55fb76f600c2de5b166670b23db79943226c9615112eea3360fb29dce0627","chunk-Y6URMNV2.js":"e90f7278bdc4fec145cd260fa3b3da80f6f01ddcf6d1116d90c3d46507d52851","chunk-Z4VM6G2G.js":"a184502d897370ccfebff418193a25b9e324e2b0bfde7bda99d0f54525e22037","diff-YYYGDWIB.js":"85afcd62e049b40f29d3c94d232cefb218a8c60bb599d8133ba3b312196c89be","doc-info-EBFKHQM3.js":"0cecb28fab333993dbc1615b54cdaad081794071fa6e5e7e254b4e692adc29c3","docx-WXAIBVUO.js":"d1250efdfddf6bfb859fb59daefad74697f4c8eee20da6c4954afb20d1a5fcda","email-LNANK5YE.js":"c68f8c8f1e7d0ea5e769832e12749ebd728f76a45db259ff75a8e017ccdd2c51","encrypted-NHGYWQGQ.js":"3eb2ed95e03be76c6fff68f0456be38f86cfc76a81202099d86c0064fc24d3aa","epub-Z23YWIGU.js":"c6bbd3c4898aaab107b077200c56d9ddaecd30770e363711664b8fe6235af792","extract-images-ILLSGJAD.js":"ab12fa93b8236661d1132ed89fbf65172e0b8657c0e866556be69ad643baaf8c","find-LUT7TYZW.js":"e736fcca8d3633023c956b74744abefe3d7c5eb41d21124eb2f6e1fc21834205","html-4FKIHFWB.js":"469ce67398aa7b0dd871d79050ada3e4c7af993b21ad8d78a2cb085b3d993f39","hwp-KACLYH65.js":"7e44c487963dd8d1b2b62f2d41a9f53e9db4f184c01aed8e6097ac07c51c8cf7","i18n-AQAF5ZDP.js":"68e8fd1e64f95d9a0fde148705e9c336ed68da0e79787f157adcca853bc5e909","icon-192.png":"ad8d0d53980bfc276bd32ab3a097de1be61d3ea45b1289fb4bcd0b11bf37c481","icon-512.png":"d12db7303e1bd22c797fa2fd8dba5a18558e314a23272f1cf0d3823c36c3fc9b","icon-maskable-512.png":"d985ecf0d26a73db96580d3fe5160ba1d778142072a672a167fc26a3445ec2ce","image-P72LAL3X.js":"ac1c3e50164e0e24346595bb3b9557ff5e4f720a48c505588fd1104047bd2e44","inflate-DRRO4CZE.js":"2cbc1ba13939fbc88b2cc0810acdf64bd36e0807a5a250fabb3d205302cf2026","jpeg-pdf-VLYWDXQR.js":"8e0752a5585e7db55aa946f0d1569f55b6e6e8139ff2ec91ea2ca2e85a3c22ff","jszip.min-ETSSBAKK.js":"16d969cdfbf98a4243e7f46eb9088be6f76801cf330672d3d80b4c40b5248910","legacy-BNHCTCAQ.js":"abe34f1f3d1adae9c06487b6c90d57313d9152a509d146e0b4df251c5ab1bb63","libarchive-4OK6UJVL.js":"8740d17040deed0eb291935e89397c7a5c6373357339dc885e4323d26be0d74f","manifest.webmanifest":"c9484b0c6fbbf222029ce0bd140bab4c4d103780a4ca8f632d54bd51acf66946","markdown-2FSALZ2B.js":"cc34a212b9c12c4a13e9d6a85d7039b93d813b63c97b708b8c5f5303adec9f45","ocr-2HBECKKV.js":"38a1db80b11e5b4940a412397474526ce8316dac199603db5c28138b83fa9930","odf-2ANIJJHJ.js":"cc5425d3d430277ad807da8d40ce9297ecf90021de80aa71945e56815aacf476","pages-MZLY3KLT.js":"cfcbb002ce99e967a53aa99e41f9a4f2d936ff6cda2aaceb0e5cd4bd8a033920","pako-PBVWCJRH.js":"d7571ff4b6045b1ac11bc2d0f70f4e07432d351db29013ac88ee8d5f66610c41","print-3YDDOFSR.js":"f78cc7ec63fc3cfaab11d8c8e007f999451a882ec5097db4934eb7c083b28c32","reader-view-D6AXGUT5.js":"f3d9a6efa3d040a00026eb2220ffad92acb3af22443e418450bcfe4afaa3f9f9","scan-425CYVBQ.js":"327119cfbf43e3268b8b6cae969760f93e6a883bb79c9d6af39cf55dfb7a7c6e","select-translate-ZWZQSUYD.js":"9308b0f3901cc12feb1107b554ec7cf74e6f190efdcfc00c591f7d524504383d","sharpen-YPLEIASK.js":"dbcb436ff09d78a9332a00547e2ffb0ddaca77ecc9842d88f469b213761d019b","sheet-ZBRBVQUS.js":"cb5b4f990a5b7fd1112c1ab16c828ab9b17522e8bdd7cd1bb88874f6580c6efc","slim-zip-DRJ2MULV.js":"89fffd40fae71f2d4d4d8d9bd7684cfe6dfab2613f443465a089b853e42a90bb","speak-RGMXPY5I.js":"97d54c834428b071255ece01424f471c8d11a0b07fbb764371cbeed38ada2a47","src-4YHVY2LM.js":"361d5191b6afef765cd9c51e9eb3e83f655e47e6b00b4218778aacef442dc437","style.css":"ff937e8fcfde7d8aee17986a8e67fb1b57cc42a34206aba693aa02bdf16239e4","tables-WJH7MTD4.js":"2fc83c202f00a550b297d1f41e823193c29f32324d70fe055b0c118df824e8e0","text-A57RXPSK.js":"fd5cfa1d2ebb9856adb7504cfde024180a91a9346876e32f38ed7db398b66028","theme.js":"6205a5c7db6dc272f3b8dfd6c80583b2d61c5e533cd5d1e930dc126144d728e2","translate-4HJC4S5D.js":"71153fbb27d594db2812cf12fddab3eceb04ee6d4943f56c8384b33fea223b07","translate-view-T2MFERWL.js":"3cb50dd71cbd1a302f37b2cdf098c179389f174eee3b48279d41f5b909984412","xlsx-ZZR4N2SW.js":"764cdd7c2cc15d80584a95b91c3089a24049119a75d64c464a2fd7482eb2f88a","archive-worker-97a339eb1a17.js":"97a339eb1a17b7ed0d36461ccfc364f3f37a0eb44cc92c30e4525ab9ba7bdf6d","es-7F7WX4TP.js":"8faa0f5441679d4c529b5b21e394321d8820701c1029c268022cbdbf52f4e307","heic-7OJ7KBCP.js":"6cd3db97315176d105e55c44569ebb667926ce0b88590541f0029a8086be3219","libarchive-8a66066ed3ea.wasm":"8a66066ed3ea1e6db0469ec752d8fca888a6bf737c6cff21fdbcb62241a72424","pdf-BL6VRH3Z.js":"85c82104e81574d30e569bd36d52d921ffe683cab7e99b81233a631c724e6027","pdf-ops-ATIOJEFX.js":"7095d7b8013ad335c70c7901a4004b29293a625ea5343b3ed3dc6c704f54d944","pdf-tools-LPL7QZVE.js":"0e47d31e6dad7f82cfa905dc220bc5b8b0fe02e9b40c32612609d5c8b6d86fcb","pdf-worker-b4c8353ded0d.js":"b4c8353ded0d88d2e2009574a29eb4e0c3ff7e942ecdf51ef5f71566a9667f31","pptx-IULLQ6PU.js":"82aa6f821908719e74eb1899f586005294aaa727355bf41f0a4a0b5a817f3865","rhwp_bg-54cf95014312.wasm":"54cf95014312e605c51b98eb9021247ea79ef2bbd0a7080e11c011d0246e3989","ocr-fdc08a9e0620/worker.min.js":"576b7df7e3393e137e51849357c9adb53fe7ac1bb69bfa06cf3d61520f182c6d","ocr-fdc08a9e0620/tesseract-core-simd-lstm.js":"e48e2f02ddae3716c8dd24bf41cd290d4efa96892d689cdc4013c2545d63f469","ocr-fdc08a9e0620/tesseract-core-simd-lstm.wasm":"34e8d50cac216427d86bf397d610fdd9f49492539bbcdfbfccc4eda20c810bea","ocr-fdc08a9e0620/tesseract-core-lstm.js":"6510efc4e8b45c5465df30679b9911ffe0071cd2ee982fa064e6f5136ef2de85","ocr-fdc08a9e0620/tesseract-core-lstm.wasm":"66b17df6e20c5329a17ffa9c202a47eaa3e32500b253d4c7f38e7f2bc01457c3","ocr-fdc08a9e0620/kor.traineddata.gz":"78c21276ab14c9bb734d83be1055d9fe5469a4e7e977c51ad385be5737e61126","ocr-fdc08a9e0620/eng.traineddata.gz":"45b4cb346724ac1774f1c36f42f182b887bcdb28ebe63e6fff90ac41f3fcff91","ocr-fdc08a9e0620/jpn.traineddata.gz":"2b63ebfbf1484de4a08ce53b29ef98a1c17658a93cbd38acb665d7d316d0be88","ocr-fdc08a9e0620/chi_sim.traineddata.gz":"b8a23f10c7de500891eb458a8adc9cc58ab7f242f08b7d149f5e9aea4ad5db7c","translate-97fa99e24b49/translator-worker.js":"3ccfbe26c8f3559ac6520b6f26bbe83be8c6c9cfc2152743ac0abddc1ce3a2d9","translate-97fa99e24b49/bergamot-translator-worker.js":"748b2418418a2ffc6e70721aeb10098d8e6fb589ea156b91f4ae8bc3490d8f7a","translate-97fa99e24b49/bergamot-translator-worker.wasm":"95a2b58dd6773bf1b3f345d71f9149928b9f75f4ec9c9064c0b3e42c298671b2","licenses.json":"356cb204937edb3da510b6d149ce459ea68ee60b8ea85ad265a62456e54e50f9","pdf/cmaps/78-EUC-H.bcmap":"d92a261336dc18b8c03a46eb4d462382d33f4338fa195d303256b2031434c874","pdf/cmaps/78-EUC-V.bcmap":"61670bebc4e4827b67230c054fd0d820d6e30c3584d02e386804e62bbedc032a","pdf/cmaps/78-H.bcmap":"ece6415b853d61e1b2560165151407d35cf16e6556932b85a13ea75276b77402","pdf/cmaps/78-RKSJ-H.bcmap":"696b1f973c97623496703809eaaa5f9b40696c77540057413f4b826a08edfa7b","pdf/cmaps/78-RKSJ-V.bcmap":"53cb6d560ab377da48cf65d6dcacb0bdb31f13fab7066c580de38c12a73a7ff9","pdf/cmaps/78-V.bcmap":"289000f02fd34872b6975503217f33abae6bee676e7d28f640473a67c8db1712","pdf/cmaps/78ms-RKSJ-H.bcmap":"a2442595218f5f8bd8e1b42188e368587d876cfe0cc4cd87196f077c878f72e2","pdf/cmaps/78ms-RKSJ-V.bcmap":"f8ddceba96bfd9d3740bd1789ee30d1f47c78371520a8084f71f7df58f19be0b","pdf/cmaps/83pv-RKSJ-H.bcmap":"44040051ec818fe09b9703472bea72efd2759d5eeb5ff0d77c718d6bb5e6d1df","pdf/cmaps/90ms-RKSJ-H.bcmap":"c13e043e85ff715b75bb03801e8fd0fb8f3a75e4a48496faa6baaf92b5b48ba1","pdf/cmaps/90ms-RKSJ-V.bcmap":"499bb916ce1adbe4289b6e5811f4dc20eb238cdc2ffad20cf26ae56716885bab","pdf/cmaps/90msp-RKSJ-H.bcmap":"7b8b3b8bbf821702e9a4df9f3596ce292380c8c1b0925dedadbb4e4b2d80498b","pdf/cmaps/90msp-RKSJ-V.bcmap":"6296c2b5c07dca8128e96d5296d621a3268803d4fa0e5812a21e52fe2802aacb","pdf/cmaps/90pv-RKSJ-H.bcmap":"fb5103f03d3a34547e18d316e52b6d9b26e485c662999222f84d2ba54c2e4fa8","pdf/cmaps/90pv-RKSJ-V.bcmap":"7bcb5ad2ba55b9662ce379e16c2d9cc2b82d621a579807353741172e4af615c2","pdf/cmaps/Add-H.bcmap":"a2ffab28b990998181bcca9b0e914bb2207820f100ae31d5c469444892e5ad8e","pdf/cmaps/Add-RKSJ-H.bcmap":"b29f4b52e2465d0485856d5e69f1ba69927deb2848d8fd328c8035583b35bb7e","pdf/cmaps/Add-RKSJ-V.bcmap":"2aa2232c283a3f5d0997c2834a36cead0b79ce2657944cfeed08140c293460ff","pdf/cmaps/Add-V.bcmap":"25125d3b1be64e86b2df5b3344170b45a42bcaa0b46e43a34314ef73c166e542","pdf/cmaps/Adobe-CNS1-0.bcmap":"8c65be9d51a9f269a547dc12460707aaf4031ab67ebe8a2900f4b4cc6b3e450e","pdf/cmaps/Adobe-CNS1-1.bcmap":"73152bc1a59cc594b414ac6068be48e5512b96ae85920c40e32a99269fdb0c04","pdf/cmaps/Adobe-CNS1-2.bcmap":"a1b8d353bdef9584c820464e8f1c9e2013d64ebf433cba0aa831dddf515818c2","pdf/cmaps/Adobe-CNS1-3.bcmap":"2ffc0c75c79fafde506163d3c08c390d183251009f3fbf6ae50d1167d14b9570","pdf/cmaps/Adobe-CNS1-4.bcmap":"98a1f470c878c6b9691a4d7aef776af8ac9b55f5587c9fafa00547f3bf655716","pdf/cmaps/Adobe-CNS1-5.bcmap":"ddd6e29955eb8cb545f2ebd09c628c3bbda5023256eda1b728f743c75fb77829","pdf/cmaps/Adobe-CNS1-6.bcmap":"317bb2db71e0e5b7b0c47b75de1da915c2e22f65f0c0861507f9ca7ba238f8a2","pdf/cmaps/Adobe-CNS1-UCS2.bcmap":"e665837f2197c6bd08cd8955ad4d6932cee2398e2e328b25b00e6bfb3bd72af9","pdf/cmaps/Adobe-GB1-0.bcmap":"8b81cce8a11d510e505704953cfa4e4ab080c1a0cab991145a3512ee433946b9","pdf/cmaps/Adobe-GB1-1.bcmap":"0426983081788ec7202703e71f1efa4b860f75b936994236010b39d89251a81e","pdf/cmaps/Adobe-GB1-2.bcmap":"e67b37a83b160ab3831306a71a605893b24454ee81ac9b6123bf2d3984d268d5","pdf/cmaps/Adobe-GB1-3.bcmap":"aa299afc3e12a28726147305f191be28c7498078c8b182ece7886ac79cd99078","pdf/cmaps/Adobe-GB1-4.bcmap":"8fbd7d74c2ddb1350c1cecce54a73fde3f5453093d4bed445283ec0033d2097f","pdf/cmaps/Adobe-GB1-5.bcmap":"c22cb2fcff24112fa31dab2111bdc51957006576d31aad5a25e67793ac01428c","pdf/cmaps/Adobe-GB1-UCS2.bcmap":"20507620260c0c935c35afc1e70e5888aa7125d5ec7ffc03cef1959feb2c1641","pdf/cmaps/Adobe-Japan1-0.bcmap":"464f08905236f5703b1f5cf8358767c8b18e6bcc808840d081f1de2c7ab38134","pdf/cmaps/Adobe-Japan1-1.bcmap":"4c823848722187d1ffe75ae3f5f9126ccd2d7895a05fad14c919fb119e037008","pdf/cmaps/Adobe-Japan1-2.bcmap":"7810fb808e367e70429e90a9478fe6a3fdc3e214f25c7582ce9c2da6a242315c","pdf/cmaps/Adobe-Japan1-3.bcmap":"84deb1828711ad3d390c9899c38abce1bf619d65ff7bf1a326ec95acc45f08f8","pdf/cmaps/Adobe-Japan1-4.bcmap":"3f8a4f974919c2b8bae5d10175ffa2673be140481e00840542c85d48ef184067","pdf/cmaps/Adobe-Japan1-5.bcmap":"1d3ce4ff28d977f8cf37a912ae4ec811f4175c3167b1ec0b2567feec3e79e1db","pdf/cmaps/Adobe-Japan1-6.bcmap":"5609797b9401b30be72ef9645da62a87829f058c3be4b5c623383119f584b1d9","pdf/cmaps/Adobe-Japan1-UCS2.bcmap":"66c5d0dc4964f4093e77b194023f3a0f689324028ec8330e1e1d0570bcba7c2f","pdf/cmaps/Adobe-Korea1-0.bcmap":"dfb8c3874f0e5a8c3acf597d2c12d2b63e90bc5e4f0fce990ec4c56077d80b32","pdf/cmaps/Adobe-Korea1-1.bcmap":"62f277b7b1c441c007797ae707d5c37258d029ce4661a2b911e2e1ee35e6adc1","pdf/cmaps/Adobe-Korea1-2.bcmap":"1d77068af462f96d7ad28ad7e7d43eef6423c685b479d7dc25ff5df38db0380d","pdf/cmaps/Adobe-Korea1-UCS2.bcmap":"857b723088be97255053562bfa41bd1075a7f7910d3bab59a0645c8bbc7060ff","pdf/cmaps/B5-H.bcmap":"718ad0ffbef4c34f8f3f31292c462e519cd567a5511fc8b346c60010d64f4ef9","pdf/cmaps/B5-V.bcmap":"b5c37383517477620ced927b6b4ffd4f4cc6230d8051b5b46a21d6768e07f7d8","pdf/cmaps/B5pc-H.bcmap":"bab6028aead1d6149400e904ab10cfd319082d826473ed4c582c8eeed920f17e","pdf/cmaps/B5pc-V.bcmap":"41543142b9767f3b76133899fc8453282b01ad3c653acaeea42d78c5a7d08c63","pdf/cmaps/CNS-EUC-H.bcmap":"e8f89cd61e6486b948205da46499d659ed0aed949b7095fd3c8e95ffe2b0e7a9","pdf/cmaps/CNS-EUC-V.bcmap":"cae422bec2ac6dbe86bf921cec942bacd2d0b733ffcca5f91b3ba14e917025a0","pdf/cmaps/CNS1-H.bcmap":"e8487971ab20cd16f3de3e8ac56ec994b72b658ad113f2818239dfd5108f501a","pdf/cmaps/CNS1-V.bcmap":"42df8076aaa7574505e7304af83a3323ec032c4177d64b1309db8c043d594a8a","pdf/cmaps/CNS2-H.bcmap":"bc6024d274d440f0625c69e25f37036ef6cb6689432ceaa160d3432a2a716ca7","pdf/cmaps/CNS2-V.bcmap":"2e4f70a8afd23a121030fc2e5b5f3816e903b11e7ba8b8c09654b31c80399c38","pdf/cmaps/ETHK-B5-H.bcmap":"d2f10fa519336bc4efcc7b6deb9604b75429946b40d82e311cb3a97a1994c89a","pdf/cmaps/ETHK-B5-V.bcmap":"1fea3fd0d9f0f679f80505800851ef2e4131d81127e18c006938ffa2f4c8b247","pdf/cmaps/ETen-B5-H.bcmap":"87ee6b3f5bfda5fe26fa35431264c7d73070d10dbbf398a75185d63ae322c18d","pdf/cmaps/ETen-B5-V.bcmap":"47dc0d2c21e3bde317947aec1675ceabc1d5460a60bf9c24334b8c407a17172c","pdf/cmaps/ETenms-B5-H.bcmap":"d5f5a73da4173b7da9a3a20e16f26f9cd5d12deb1553409919e0cec6fd37fdee","pdf/cmaps/ETenms-B5-V.bcmap":"18252fca90f472f479af1bddd60d6ab51c8e1b55dcf6845951426504934543e0","pdf/cmaps/EUC-H.bcmap":"f9939cd57fccdc65c5d9f4c205fd497ebdbd283643308da5663801a8c1d9c595","pdf/cmaps/EUC-V.bcmap":"1283a50a706507c4436da83ede9ad7a4440be25378f2e96f6c81a430081426a3","pdf/cmaps/Ext-H.bcmap":"4000ed4e61a1c668ef453bbd0603cfa383defa793abd46a57ed870d7f527350b","pdf/cmaps/Ext-RKSJ-H.bcmap":"e0d2f0df337660e73813238dd4a725f11f0621b90f3273857db253d0e7694caa","pdf/cmaps/Ext-RKSJ-V.bcmap":"f617a22b6d67febb187990952006c91a9f5a4db21155d268c656252d0c21985d","pdf/cmaps/Ext-V.bcmap":"c2087fb845a9e3acea0c2922cd40e6af67e11957bec74dcd597f1285edd490ce","pdf/cmaps/GB-EUC-H.bcmap":"928bad06fd84a48f5ba7150d7716609119fb660f2aaa73eccad81ddab9b9d203","pdf/cmaps/GB-EUC-V.bcmap":"a9ad88ac2479da529b16dc48abc5952332e27bc355335f91df5729a587533324","pdf/cmaps/GB-H.bcmap":"1018c777a8910b5bb46d7d54a4aee9d51ca5cff8addb2b41c969d9101cb3fd1c","pdf/cmaps/GB-V.bcmap":"0b96789143c0bbf9f1641ae7165b3456dccd14dabffcbb0bd654d5bf6f94f863","pdf/cmaps/GBK-EUC-H.bcmap":"2103fed28650ede096a2281104a1a8a4304dae0db414342c636867522307123b","pdf/cmaps/GBK-EUC-V.bcmap":"a7fd35dd14d9dbdb955f34e6c0630618b6620dfd09d4283b2f65a65ce77fcaea","pdf/cmaps/GBK2K-H.bcmap":"3d919ae72af16c5cc6846ec87a4326a9f125e493c59d3628429d35c2c95fe8c4","pdf/cmaps/GBK2K-V.bcmap":"b927fdfd595c07ce9158bf2ec13f4641b2e83b01c70989dadfabd6ed7c6ac2dc","pdf/cmaps/GBKp-EUC-H.bcmap":"d15ebd8e81fb4fe8a244f1b1e877922e03500ac69eddf5001093e502430451d2","pdf/cmaps/GBKp-EUC-V.bcmap":"fdc736d46e642625dccc8ad8c59f2c69fc7db7a13f2e799c6c6b779e707bb97a","pdf/cmaps/GBT-EUC-H.bcmap":"dc5f44e48a39f3367ae28665027d8ab1d8cedb5a9dcc5068a900acd6709f60f9","pdf/cmaps/GBT-EUC-V.bcmap":"a1ad24e63653b8aa388c18fa5e498f007564e43dde699a9f91ccb4645c999be8","pdf/cmaps/GBT-H.bcmap":"8afda745a505763f3ff54c8126eeb48ef376ea9ed07d9f42ff9a22c5c547ec57","pdf/cmaps/GBT-V.bcmap":"cdc2ec5c3c7c7033290c9a8894878202f08674eb9b1ae7d36218430326768771","pdf/cmaps/GBTpc-EUC-H.bcmap":"7b23e2f7bfdb6c918f567b7324bf858f398bd8cd5f268d74ece19a3c91bf4f32","pdf/cmaps/GBTpc-EUC-V.bcmap":"d7a1b13ead9ab511cf2cd01de6ce8b02aa8e8767e84895337d7a3b67f039f93b","pdf/cmaps/GBpc-EUC-H.bcmap":"3c4a4eb82f05abe51f6650985c630e180438bfdd491318f5d20d2ec29236e1c3","pdf/cmaps/GBpc-EUC-V.bcmap":"215bdfa2842705624b4cf4cd29b8e3c720f1e192365e0305c11030a424c84d7c","pdf/cmaps/H.bcmap":"a0233e21047ec00b852125b243cbcf30abee511155b6d8159c24f944384bc9ee","pdf/cmaps/HKdla-B5-H.bcmap":"5242bce18fb13ab4cc59b146a03eba36e4ce42667eeff09e10981a9d2aa4996b","pdf/cmaps/HKdla-B5-V.bcmap":"2e0537f786c0791d41a925f72bad2d4e7268aa6cbf15a1400a722672cec38e2c","pdf/cmaps/HKdlb-B5-H.bcmap":"fdc8159984bf5dbe475c0d5dfcb621ecee4dea07c38c668bd77f4c679e23b9b3","pdf/cmaps/HKdlb-B5-V.bcmap":"b249eb9dcb915ab45057c5d4d7aa55ef88d0efbb092af6bae0b2d4705d139abf","pdf/cmaps/HKgccs-B5-H.bcmap":"ab64c7fc5e9b2e97750cc4f269b0da14fd8649e49151b7598c8df86599bac591","pdf/cmaps/HKgccs-B5-V.bcmap":"02ebdf7cdffb5395fb21091cd58a013a18ae5388922822f9dc6292ef16b98956","pdf/cmaps/HKm314-B5-H.bcmap":"bfd8bbde6b36a9da4c1c902c74121a30d9807a7079a00eeea218be6adc223cef","pdf/cmaps/HKm314-B5-V.bcmap":"2a64a815cfb6fdd480674a868762e3d161fda17543b20c9209978559f0667164","pdf/cmaps/HKm471-B5-H.bcmap":"49d7c037758826b5b6c0fa329c35bbf25d3943197754e72ecd30c6fb04d745e6","pdf/cmaps/HKm471-B5-V.bcmap":"be24c109e78aa4fe3c1f27d30aab3ed0741e783fa1b6b6c2719741072b54b132","pdf/cmaps/HKscs-B5-H.bcmap":"08599378f41d96b40537adef6e6edcc4a787bc63f5accf47c026df4905a13914","pdf/cmaps/HKscs-B5-V.bcmap":"d073542b7dad1c4cbf01c1af5f0cd13218d1281a491956e310c55702fc8705c4","pdf/cmaps/Hankaku.bcmap":"b454701f7aecd7856769016dfd04ca64280a060f2c67a2466d50b4395d24974e","pdf/cmaps/Hiragana.bcmap":"2ed669394756dd9458651cd9995ab29ab691ecb7686659003306cdf22767a414","pdf/cmaps/KSC-EUC-H.bcmap":"6784e16dbc5861c036c23d3e55f0d4ba0975a3e464da0ee8e49bcfff0be070c4","pdf/cmaps/KSC-EUC-V.bcmap":"fdb36bad85e9924823d49db374067988e024cf80fc894711f2c9178951cbbe95","pdf/cmaps/KSC-H.bcmap":"c1f6d61f1d3304fd539a65ae72624fa567ecc3853bf52e283958a7a2515b3eee","pdf/cmaps/KSC-Johab-H.bcmap":"939993d213f68db763bf156217c217ae23af082b91a0eacecf3d11eb4ff8ef8c","pdf/cmaps/KSC-Johab-V.bcmap":"5d61967aac0e666def721e8b8d0fed8f95a879a14f2e76ce516c3d11c621e519","pdf/cmaps/KSC-V.bcmap":"d7da5afd9f1fe74816d79c9325f0139a4efb6438664ebfdf9a7aa92f3034360f","pdf/cmaps/KSCms-UHC-H.bcmap":"5b70d8f6a4fa9e2283dc649f0ff95d906d56efbee50a20e8d2faec3a8fed078e","pdf/cmaps/KSCms-UHC-HW-H.bcmap":"a5e6ba22aceb02fdedee11bfb9ed138463d89e85b87810b9f075b469d936f8ec","pdf/cmaps/KSCms-UHC-HW-V.bcmap":"890332a6a26880d463a12f2a6ff048bf9cf7e45077cfb1ca8815b89baa7bf411","pdf/cmaps/KSCms-UHC-V.bcmap":"1631b531c9a40c8cbe24c2317dba107362e49fa6e18af620414d627c111d570c","pdf/cmaps/KSCpc-EUC-H.bcmap":"709480682c55cedbb0124b9960d78e28febeee0df2e34607d61aac6601647ec7","pdf/cmaps/KSCpc-EUC-V.bcmap":"031707887d6fc2378a36cdb6775334fd7a236c3f95048d8436abf43fe26fc49d","pdf/cmaps/Katakana.bcmap":"3b6ca6642fbf8822da00d5e58a8aa275216d5c32dbf2bd73e934197fc9fc5c53","pdf/cmaps/NWP-H.bcmap":"286c6c9e335da330928a01edc3c97a3a623f1f7f3c42762b0a7dc2f651b1a78f","pdf/cmaps/NWP-V.bcmap":"3a75fb7b59adfb172710758c425d8ac6c93fd5360a64dd4afd5dd04e60ab4b4d","pdf/cmaps/RKSJ-H.bcmap":"a70de61a22a898f693f02cc011c3e3cff2e10aaa7cddb4661e456a21ae859f78","pdf/cmaps/RKSJ-V.bcmap":"68c1a64506471a524ea5cfc3b3a9f8f70031989a6bd95427b1351f33ccf50b06","pdf/cmaps/Roman.bcmap":"1c6b3ef9d9e5cb1aa329142ce9414b90f9b6d7f9182a2a9e927378dab8f0d43f","pdf/cmaps/UniCNS-UCS2-H.bcmap":"779428116752f34e2490a1941d24e4634c71e3c22d053b811d2090ae2fb3c704","pdf/cmaps/UniCNS-UCS2-V.bcmap":"1e5cc184b850ea44abc2df8ae5674279df668e8edf5e2a1a2ea2bd77adbd280f","pdf/cmaps/UniCNS-UTF16-H.bcmap":"32ff139b3c7b91d6ad25f994701f3ce7b242906022c418fd73e6493fc228bfe5","pdf/cmaps/UniCNS-UTF16-V.bcmap":"278eb1e68d1a236c60ef59472cf0176ee0d45f364285e76ca12419a08d46fb9a","pdf/cmaps/UniCNS-UTF32-H.bcmap":"bf26eb67fe19ee5ba915799e80ca72408400aa8342fdf6a244a4f44de8f97336","pdf/cmaps/UniCNS-UTF32-V.bcmap":"f7da3caf83ceb1cb37936fa10700d9ba6e9c3f72c5bc9724e3ac79bff0c0179e","pdf/cmaps/UniCNS-UTF8-H.bcmap":"2f2a742bcd1a84a148a4a518b9eed51a8f9c6ca5ed3bc5e2e41fff97de5dc2d8","pdf/cmaps/UniCNS-UTF8-V.bcmap":"b7c3f10780a8c62dd1c8ff6c30dc1e4e23b6cdc87c3a96fcd514cc98ffd3af9d","pdf/cmaps/UniGB-UCS2-H.bcmap":"9201569b402e81ad8860650bd86350c4fa28e5dd5971f05fcacaf40f51de18ed","pdf/cmaps/UniGB-UCS2-V.bcmap":"f10282335e4d64203bc2a653a3a47d745ec76c8ae04549f4d50180c1899be216","pdf/cmaps/UniGB-UTF16-H.bcmap":"386fd39581245c034da016a92d23f3df1117d169f996100050b264fc09a84e35","pdf/cmaps/UniGB-UTF16-V.bcmap":"0473cfbba612b92dd9918f0ff8aee9112897c48e0ffdc0eb82da3144ed8ea84a","pdf/cmaps/UniGB-UTF32-H.bcmap":"f48a145dc4e3ed1dca1dde7111716a72306a2a4191ab05c6bae3a5c3a961cd2f","pdf/cmaps/UniGB-UTF32-V.bcmap":"106acc49b7118bdef944e32107b4f348238f3929a0a15d3b7aab7b9101535993","pdf/cmaps/UniGB-UTF8-H.bcmap":"f217b439c80ee5fa1bc2cf6d1defcc319f8d84483d166a00ee199e05a68588df","pdf/cmaps/UniGB-UTF8-V.bcmap":"a64df947632878eacc532fa193c735c92a383b7d66e6f8374ac193af7c64fc63","pdf/cmaps/UniJIS-UCS2-H.bcmap":"ad2352f40870880fbf7f8ee5abadff743fbd025fbf9830b8ada472d1c5e4da0b","pdf/cmaps/UniJIS-UCS2-HW-H.bcmap":"16e87edca954177c0881c874859d6783220925d821b5cdfb8755b61ebd93f9ce","pdf/cmaps/UniJIS-UCS2-HW-V.bcmap":"1973457e2c0192819947e56068625b34fb9a72ecc8a476ce6d7eaae5f73e2e5c","pdf/cmaps/UniJIS-UCS2-V.bcmap":"42a133d8e2ce9dd6d2288018e01592d2bf2435b326d39b94ea0b6e6a44ac33d3","pdf/cmaps/UniJIS-UTF16-H.bcmap":"f6a89c5688978548c83fcee990e205bc63c74274d5c69b49032a3bd4c49a05ee","pdf/cmaps/UniJIS-UTF16-V.bcmap":"c67126fc7c73850855186bb0d6482ac0a365057e0b58778c4ab9f234683fef53","pdf/cmaps/UniJIS-UTF32-H.bcmap":"96195950ce0fe24443d8eb426fa6b88534ec421d7bef9046f0b2362809cfba73","pdf/cmaps/UniJIS-UTF32-V.bcmap":"ed4dafda402bdd19c4d5d8bf2ab41473c0f86f384552b4c7b963d6627daedeb1","pdf/cmaps/UniJIS-UTF8-H.bcmap":"798fb0bf06ab0788d1f6a91c2db7de581612eef03c628f10e8f7ecd8f70ab448","pdf/cmaps/UniJIS-UTF8-V.bcmap":"1021611424f913b2df0bfdbe94bd327c04e224ec89d8e821c6501ea3d21f4265","pdf/cmaps/UniJIS2004-UTF16-H.bcmap":"710a32d7cb43fd6bd9dbf30da5971f8c941590f74441e208d852c2be0e74cc97","pdf/cmaps/UniJIS2004-UTF16-V.bcmap":"3b149aff5c5707b57fb3215d1775852c8b1f413ec0f679ea628f25cf87fe098d","pdf/cmaps/UniJIS2004-UTF32-H.bcmap":"8d2658e18741af7937d586a57c89729a6fec0d86121197c1f8518aa58b29cdfb","pdf/cmaps/UniJIS2004-UTF32-V.bcmap":"6dd475782f2897648a683c48b2fa015a15b8f06856760bddc8a17a63f418bacb","pdf/cmaps/UniJIS2004-UTF8-H.bcmap":"691c614ce432b3e62486efb54e5c84c6da5afe9b51b21253bde4758feb484183","pdf/cmaps/UniJIS2004-UTF8-V.bcmap":"40a8c7ea2d46711c5f78fc9a878a7db68b1543ba5cd60ecf14f519a2deb829b7","pdf/cmaps/UniJISPro-UCS2-HW-V.bcmap":"6826f94d789d7bf1960668c1c5819c34c9585c1b23152fbc19ee81c7df08524b","pdf/cmaps/UniJISPro-UCS2-V.bcmap":"493de9fd1a08f7946065d8ab58f0c3c9fe489f5a0f109f2d05a3169b4bd5789f","pdf/cmaps/UniJISPro-UTF8-V.bcmap":"6181d382cf736c5e09492e8be9f26f31fa25b7462253f23ab16646af432cad81","pdf/cmaps/UniJISX0213-UTF32-H.bcmap":"692044e1fb33445668632bc9fe7386805c624864be1ddeb29d65bb0c99fc630c","pdf/cmaps/UniJISX0213-UTF32-V.bcmap":"dd54e16ca7bffb3a886242549b2bf7d78a277087f7c60d2636f118c21a5b0646","pdf/cmaps/UniJISX02132004-UTF32-H.bcmap":"f80ea5a989be30ccda5a8804baef6d3b4b044d2b339bf8b31c671b2466171cf6","pdf/cmaps/UniJISX02132004-UTF32-V.bcmap":"94c22bd99e771c5fbe0dd8dc39850570d4db0075074aca13e272813edd7cc57f","pdf/cmaps/UniKS-UCS2-H.bcmap":"a1081396ab4adb6f4a5b6c15f896963c244c1c9bcb65ce5616d06096a1b9811c","pdf/cmaps/UniKS-UCS2-V.bcmap":"6cab547431958fbdc1d401d06ebd4dd61a73f5509a10f974df32bcbca11a2e43","pdf/cmaps/UniKS-UTF16-H.bcmap":"42d35b396286499dfae1737a07adb3a64500df37b426580bfb1d3ea872938519","pdf/cmaps/UniKS-UTF16-V.bcmap":"5bdb7390c80dcc136cb47d41dc7460082560969c17322ee739fe3020fb642410","pdf/cmaps/UniKS-UTF32-H.bcmap":"3a01ec51ed1b828101351e337ffb8250abe11880032e5210f881170fed2588de","pdf/cmaps/UniKS-UTF32-V.bcmap":"dfda895eceaed081af030dbbb962b49629eea817fc3c02bae15db93d0c68acd7","pdf/cmaps/UniKS-UTF8-H.bcmap":"3fac9c65145f72d7d42157a3b9c5ed6904632184e6a0888f2b828699afd2002f","pdf/cmaps/UniKS-UTF8-V.bcmap":"9ecc6cf30dd354b9778ddba163b6cc7302b087ce9f39d1ba73472d2b75ed13ca","pdf/cmaps/V.bcmap":"b9ad1c0c09ff14bca52f9a28a9767eb857ad0e8946e64ba14c7387a7eb69866a","pdf/cmaps/WP-Symbol.bcmap":"543923bead225732aba30976690ee89095a19628277b5863efecc2c728d5d7bf","pdf/standard_fonts/FoxitDingbats.pfb":"845c752392b6c914fb989c75a08b7792b88f542d2499042ef2889f8c814a16ed","pdf/standard_fonts/FoxitFixed.pfb":"b6c8fe53f134b8b6d4578cd2d544df4cee9624c4efa8d51a560fb40ea296101b","pdf/standard_fonts/FoxitFixedBold.pfb":"f1b7159702973f54fc86254ea38bcf3712b2a736eb3a0995751e9f4bb45ad603","pdf/standard_fonts/FoxitFixedBoldItalic.pfb":"8a000945843bd31add06aee63bf9fd41b7578b4f3242a4b7cd46349ad9d24d4d","pdf/standard_fonts/FoxitFixedItalic.pfb":"5007faf8320fa1fcc08b8894b356ad976f60b992ba29ee5272578bbdebaf3876","pdf/standard_fonts/FoxitSerif.pfb":"4f57d2b9d884af8f907bf22df6019b52d86cbf6214fdbd02b1ae05472a543f35","pdf/standard_fonts/FoxitSerifBold.pfb":"0bdf4b04e964139818d51eda03d566ba999fc3ba2421b1c6c51f9dc969022e80","pdf/standard_fonts/FoxitSerifBoldItalic.pfb":"a406cac82583bf98175cb62c87ed5e95c45fbb34eece63a10b0a13e793cb2e10","pdf/standard_fonts/FoxitSerifItalic.pfb":"610ae0687198045c4db5d1a6650fd5e92536631706382eb8b72e38df578d0ae9","pdf/standard_fonts/FoxitSymbol.pfb":"47967d055530e7357088a08403115425643ec2cdfd6201ba8af0fbd7116c1539","pdf/standard_fonts/LiberationSans-Bold.ttf":"788abee4c806d660e8aee46689dd8540cd4bb98da03dcc9d171ce3efd99a9173","pdf/standard_fonts/LiberationSans-BoldItalic.ttf":"698da70fc191cc5f33ad4d6d3fe830fe4624b898ea2e3169955928b7c491f1ee","pdf/standard_fonts/LiberationSans-Italic.ttf":"e5bae5c4cde31f22142753855f4f8fb86da6ff39955ed3c0a11248b0d16948b0","pdf/standard_fonts/LiberationSans-Regular.ttf":"76d04c18ea243f426b7de1f3ad208e927008f961dc5945e5aad352d0dfde8ee8","pdf/wasm/jbig2.wasm":"466f45c2a61a698152fb5400c27e56ff2ceb73dcb71fde3fc366a502308eaab0","pdf/wasm/openjpeg.wasm":"7ea4b2b04613370ad4e9c1162da750cc88b4b176eac0d0c164b3caff23fc0a46","pdf/wasm/qcms_bg.wasm":"663d86126d5f5fcb1c61490f94353e2a8375660b8c5498ab3ebab5a34b08800e"};
const LAZY_MB = 37; // all of LAZY together, for the 설정 screen's download button

// The language packs the reader downloaded for 번역 (translate.js): theirs, never touched here.
const TRANSLATE_CACHE = 'folio-translate';

const SHARE_INBOX = 'share-inbox'; // the same names as in app.js
const SHARED_FILE = 'shared-file';

const toUrl = (f) => new URL(f, self.registration.scope).href;
const lazyUrls = new Set(LAZY.map(toUrl));
const onDemandUrls = new Set(ON_DEMAND.map(toUrl));

// The kinds of big file: the HWP engine, the PPT renderer, the PDF renderer with its worker, and
// the library that turns PDF pages (which the 정보 screen doesn't report on).
const kindOf = (url) => {
  if (/rhwp_bg-[^/]*\.wasm$/.test(url)) return 'hwp';
  if (/\/(archive-worker|libarchive)-[^/]*$/.test(url)) return 'archive';
  if (/\/heic-[^/]*\.js$/.test(url)) return 'heic';
  // Japanese and Chinese data: fetched only when someone picks those languages to read.
  if (/\/ocr-[^/]+\/(jpn|chi_sim)\./.test(url)) return 'ocr-more';
  if (/\/ocr-[^/]+\//.test(url)) return 'ocr';
  if (/\/translate-[^/]+\//.test(url)) return 'translate';
  if (/\/es-[^/]*\.js$/.test(url)) return 'pdf-turning';
  if (/\/pdf-(ops|tools)-[^/]*\.js$/.test(url)) return 'pdf-tools'; // only needed for PDF 도구
  return /\/pdf-[^/]*\.js$/.test(url) ? 'pdf' : 'pptx';
};

// A big file's name without its content hash: the same part in every release
// ("pptx-DJ6WDA6T.js" and "pptx-MSYMJVMH.js" are both "pptx.js").
const familyOf = (url) => {
  const path = new URL(url).pathname;
  const ocr = /\/ocr-[^/]+\/(.+)$/.exec(path);
  if (ocr) return `ocr/${ocr[1]}`;
  const engine = /\/translate-[^/]+\/(.+)$/.exec(path);
  if (engine) return `translate/${engine[1]}`;
  return path.split('/').pop().replace(/-[A-Za-z0-9]{8,}(?=\.[a-z0-9]+$)/, '');
};

async function prefetchLazy(families = null) {
  const cache = await caches.open(ASSET_CACHE);
  for (const url of lazyUrls) {
    if (families && !families.has(familyOf(url))) continue;
    if (!(await matches(url, await cache.match(url)))) await fetchChecked(url, ASSET_CACHE);
  }
}

// The big files kept offline by any earlier release: the asset cache, and the single
// "folio-<hash>" cache that the first releases kept everything in. (Shell caches hold small
// release files only, some named like big ones.)
async function familiesInUse() {
  const families = new Set();
  for (const key of await caches.keys()) {
    if (!key.startsWith('folio-') || key.startsWith('folio-shell-') || key === TRANSLATE_CACHE) continue;
    for (const request of await (await caches.open(key)).keys()) families.add(familyOf(request.url));
  }
  return families;
}

// For each big file someone already keeps offline, fetch this release's version now (while
// online, installing): activation drops the old ones, and offline use mustn't silently
// disappear. Files never used aren't downloaded (only the OCR engine this phone runs, for
// example). A failure fails the install, which the browser retries later.
async function refreshLazyIfUsed() {
  const families = await familiesInUse();
  if (families.size) await prefetchLazy(families);
}

// PDF character maps and fonts, fetched by an earlier release when a document needed them:
// carried over, so such PDFs keep their text offline after an update.
async function carryOnDemand() {
  const shell = await caches.open(SHELL_CACHE);
  for (const key of await caches.keys()) {
    if (!key.startsWith('folio-shell-') || key === SHELL_CACHE) continue;
    const old = await caches.open(key);
    for (const url of onDemandUrls) {
      if (!/\/pdf\/(cmaps|standard_fonts)\//.test(url) || (await shell.match(url))) continue;
      const hit = await old.match(url);
      if (hit) await shell.put(url, hit);
    }
  }
}

// A response whose bytes are this release's file (by its SHA-256), or null.
async function matches(url, response) {
  const expected = HASHES[pathOf(url)];
  if (!expected || !response?.ok) return false;
  return hex(await crypto.subtle.digest('SHA-256', await response.clone().arrayBuffer())) === expected;
}
// Fetched past the browser's cache, checked, and only then stored (a CDN still half-way through a
// release can hand over another release's file under the same name).
async function fetchChecked(url, cacheName) {
  const response = await fetch(new Request(url, { cache: 'reload' }));
  if (!(await matches(url, response))) throw new Error(`${url}: not this release's file`);
  await (await caches.open(cacheName)).put(url, response.clone());
  return response;
}

self.addEventListener('install', (event) => {
  // Every shell file checked before the release installs; a mismatch fails the install, which the
  // browser tries again later.
  event.waitUntil(Promise.all([
    Promise.all(SHELL.map((f) => (f === './' ? fetchChecked(toUrl(f), SHELL_CACHE).catch(() => {}) : fetchChecked(toUrl(f), SHELL_CACHE))))
      .then(() => carryOnDemand().catch(() => {})),
    refreshLazyIfUsed(),
  ]));
  // No skipWaiting: pages already open keep the release they started with (the chunks they
  // import lazily are still in its cache) until the user accepts the update.
});

// Which formats can open offline: { hwp: bool, pptx: bool, pdf: bool, ocr: bool, ... } and the
// size of all of them together.
async function lazyStatus() {
  const cache = await caches.open(ASSET_CACHE);
  const status = { mb: LAZY_MB };
  let core = false; // OCR runs one of two engines (with or without SIMD): either one will do
  for (const url of lazyUrls) {
    const kind = kindOf(url);
    const cached = Boolean(await cache.match(url));
    if (kind === 'ocr' && /tesseract-core-/.test(url)) {
      core ||= cached;
      continue;
    }
    status[kind] = (status[kind] ?? true) && cached;
  }
  if ('ocr' in status) status.ocr &&= core;
  return status;
}

// The 정보 screen asks over a MessageChannel: "status" (which big files are cached?) and
// "prefetch" (cache them now). "skipWaiting" comes from the update bar.
self.addEventListener('message', (event) => {
  const reply = (value) => event.ports[0]?.postMessage(value);
  if (event.data === 'skipWaiting') self.skipWaiting();
  if (event.data === 'status') event.waitUntil(lazyStatus().then(reply, () => reply({})));
  if (event.data === 'prefetch') {
    event.waitUntil(prefetchLazy().then(() => reply('prefetched'), () => reply('failed')));
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Files fetched from 정보 while this release was waiting were the old release's; get this
    // release's versions of those kinds too before the old ones go (best effort: maybe offline).
    await refreshLazyIfUsed().catch(() => {});
    // Every other cache of this app goes, including the single "folio-<hash>" cache of the first
    // releases. Only this app's: other sites on the same github.io origin may keep their own.
    // The release just replaced keeps its shell one more round: another window still running it
    // can load what it hasn't yet (it's told to reload meanwhile).
    const keys = await caches.keys();
    const previous = keys.filter((key) => key.startsWith('folio-shell-') && key !== SHELL_CACHE).slice(-2);
    for (const key of keys) {
      if (key.startsWith('folio-') && key !== SHELL_CACHE && key !== ASSET_CACHE && key !== TRANSLATE_CACHE && !previous.includes(key)) await caches.delete(key);
    }
    const assets = await caches.open(ASSET_CACHE);
    for (const request of await assets.keys()) {
      if (!lazyUrls.has(request.url)) await assets.delete(request);
    }
    await self.clients.claim();
  })());
});

// A file shared from another app arrives as a POST, which a static site can't answer, so it's
// taken here and left for the page to pick up. Only ever one, and the page deletes it at once.
async function receiveShared(request) {
  try {
    const [file, ...others] = (await request.formData()).getAll('file').filter((part) => part instanceof File);
    if (file) {
      const headers = {
        'content-type': file.type || 'application/octet-stream',
        'x-file-name': encodeURIComponent(file.name),
        'x-more-files': String(others.length),
      };
      await (await caches.open(SHARE_INBOX)).put(SHARED_FILE, new Response(file, { headers }));
    }
  } catch {
    // too big for storage, or unreadable: the app opens and says nothing arrived
  }
  return Response.redirect(toUrl('./?shared=1'), 303);
}

const hex = (buffer) => [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, '0')).join('');
const pathOf = (url) => {
  const rel = new URL(url).pathname.slice(new URL(self.registration.scope).pathname.length);
  return rel === '' || rel === 'index.html' ? './' : rel;
};
async function trusted(url, response) {
  if (!response) return null;
  const expected = HASHES[pathOf(url)];
  if (!expected) return null; // not a file of this release: never served from a cache
  const sum = hex(await crypto.subtle.digest('SHA-256', await response.clone().arrayBuffer()));
  if (sum !== expected) {
    for (const key of await caches.keys()) if (key.startsWith('folio-')) await (await caches.open(key)).delete(url, { ignoreSearch: true });
    return null;
  }
  return response;
}
// The previous releases' shells only (a window still running one), never other caches.
async function fromOldShells(request) {
  // Only what a window of the previous release can still ask for: its content-hashed chunks.
  if (request.mode === 'navigate' || !/-[A-Za-z0-9]{8,}\.(js|css|wasm)$/.test(new URL(request.url).pathname)) return null;
  for (const key of (await caches.keys()).filter((k) => k.startsWith('folio-shell-') && k !== SHELL_CACHE)) {
    const hit = await (await caches.open(key)).match(request, { ignoreSearch: true });
    if (hit) return hit;
  }
  return null;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method === 'POST' && request.url === toUrl('share')) {
    event.respondWith(receiveShared(request));
    return;
  }
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    // ignoreSearch: the start page is cached as ./ but may be opened with a query string.
    const url = request.url.split('?')[0];
    const hit = (await trusted(url, await (await caches.open(SHELL_CACHE)).match(request, { ignoreSearch: true })))
      ?? (await trusted(url, await (await caches.open(ASSET_CACHE)).match(request)))
      // The release before, for a window still running it: only files this release doesn't have
      // (anything of this release must pass the check above or come fresh from the network).
      ?? (HASHES[pathOf(url)] ? null : await fromOldShells(request));
    if (hit) return hit;
    // A file of this release that wasn't cached, or was thrown out: fetched, checked, stored.
    if (HASHES[pathOf(url)]) {
      const shellFile = SHELL.some((f) => toUrl(f).split('?')[0] === url) || pathOf(url) === './';
      const target = shellFile ? SHELL_CACHE : lazyUrls.has(url) ? ASSET_CACHE : onDemandUrls.has(url) ? SHELL_CACHE : null;
      if (target) {
        try {
          return await fetchChecked(pathOf(url) === './' ? toUrl('./') : url, target);
        } catch {
          // offline, or the server is mid-release: plain network below
        }
      }
    }
    // From the network, past the browser's own cache when it's a file of this release (an hour-old
    // copy from the last release would fail the check above next time).
    const known = lazyUrls.has(request.url) || onDemandUrls.has(request.url);
    const response = await fetch(known ? new Request(request.url, { cache: 'reload' }) : request);
    const target = lazyUrls.has(request.url) ? ASSET_CACHE : onDemandUrls.has(request.url) ? SHELL_CACHE : null;
    if (response.ok && target && (await matches(request.url.split('?')[0], response))) {
      const copy = response.clone();
      event.waitUntil(caches.open(target).then((cache) => cache.put(request, copy)));
    }
    return response;
  })());
});

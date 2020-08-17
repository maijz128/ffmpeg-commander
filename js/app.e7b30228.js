(function(e){function a(a){for(var n,l,u=a[0],i=a[1],s=a[2],c=0,m=[];c<u.length;c++)l=u[c],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(a);while(m.length)m.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,u=1;u<t.length;u++){var i=t[u];0!==r[i]&&(n=!1)}n&&(o.splice(a--,1),e=l(l.s=t[0]))}return e}var n={},r={app:0},o=[];function l(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(t,n,function(a){return e[a]}.bind(null,n));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/ffmpeg-commander/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=a,u=u.slice();for(var s=0;s<u.length;s++)a(u[s]);var p=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var n=t("85ec"),r=t.n(n);r.a},"56d7":function(e,a,t){"use strict";t.r(a);t("e623"),t("e379"),t("5dc8"),t("37e1");var n=t("2b0e"),r=t("5f5b"),o=t("998c"),l=t.n(o),u=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("b-navbar",{attrs:{type:"dark",variant:"dark"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[n("img",{attrs:{src:t("a379"),height:"25",width:"25",alt:"FFmpeg Commander"}}),e._v(" FFmpeg Commander ")])],1)],1),n("div",{staticClass:"container",attrs:{id:"app"}},[n("Editor")],1),e._m(0)],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("footer",{staticClass:"container mt-4 text-center"},[t("hr"),t("div",{staticClass:"text-muted"},[t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/alfg/ffmpeg-commander"}},[e._v("GitHub")])]),t("li",[t("a",{attrs:{href:"https://ffmpeg.org/ffmpeg.html"}},[e._v("FFmpeg Documentation")])])])])])}],s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"editor"},[t("b-form-row",[t("b-col",[t("b-form-group",{attrs:{label:"Input:","label-for":"input"}},[t("b-form-input",{staticClass:"mb-2",attrs:{state:Boolean(e.form.input),placeholder:"Example: input.mp4"},model:{value:e.form.input,callback:function(a){e.$set(e.form,"input",a)},expression:"form.input"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Output:","label-for":"output"}},[t("b-form-input",{attrs:{state:Boolean(e.form.output),placeholder:"Example: output.mp4"},model:{value:e.form.output,callback:function(a){e.$set(e.form,"output",a)},expression:"form.output"}})],1)],1)],1),t("b-tabs",{staticClass:"mt-4"},[t("b-tab",{staticClass:"mt-2",attrs:{title:"Format"}},[t("Format",{model:{value:e.form.format,callback:function(a){e.$set(e.form,"format",a)},expression:"form.format"}})],1),t("b-tab",{staticClass:"mt-2",attrs:{title:"Video"}},[t("Video",{attrs:{container:e.form.format.container},model:{value:e.form.video,callback:function(a){e.$set(e.form,"video",a)},expression:"form.video"}})],1),t("b-tab",{staticClass:"mt-2",attrs:{title:"Audio"}},[t("Audio",{attrs:{container:e.form.format.container},model:{value:e.form.audio,callback:function(a){e.$set(e.form,"audio",a)},expression:"form.audio"}})],1),t("b-tab",{staticClass:"mt-2",attrs:{title:"Filters"}},[t("Filters",{model:{value:e.form.filters,callback:function(a){e.$set(e.form,"filters",a)},expression:"form.filters"}})],1),t("b-tab",{staticClass:"mt-2",attrs:{title:"Options"}},[t("Options",{model:{value:e.form.options,callback:function(a){e.$set(e.form,"options",a)},expression:"form.options"}})],1)],1),t("hr"),t("div",{staticClass:"code"},[t("b-form-textarea",{ref:"code",attrs:{placeholder:"FFmpeg command will be generated here!",rows:"3","max-rows":"6",plaintext:""},model:{value:e.cmd,callback:function(a){e.cmd=a},expression:"cmd"}})],1),t("div",{staticClass:"mt-4"},[t("b-button",{on:{click:e.copyToClipboard}},[e._v("Copy")]),t("b-button",{staticClass:"ml-2",on:{click:e.toggleJSON}},[e._v(e._s(this.showJSON?"Hide":"Show")+" JSON")])],1),e.showJSON?t("b-card",{staticClass:"mt-3",attrs:{"no-body":"",header:"JSON Format"}},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.formString,expression:"formString"}],staticClass:"m-0"},[t("code")])]):e._e()],1)},p=[],c=(t("b0c0"),t("ac1f"),t("5319"),t("df7c")),m=t.n(c),v={containers:{video:[{name:"MP4",value:"mp4"},{name:"MKV",value:"mkv"},{name:"WebM",value:"webm"},{name:"MPG",value:"mpg"},{name:"AVI",value:"avi"},{name:"OGV",value:"ogv"}],audio:[{name:"MP3",value:"mp3"},{name:"M4A",value:"m4a"},{name:"OGG",value:"ogg"},{name:"FLAC",value:"flac"},{name:"WAV",value:"wav"}]},clip:[{name:"None",value:!1},{name:"Enabled",value:!0}],codecs:{video:[{name:"x264",value:"x264",supported:["mp4","mkv"]},{name:"x265",value:"x265",supported:["mp4","mkv"]},{name:"AV1",value:"av1",supported:["mp4","mkv"]},{name:"VP8",value:"vp8",supported:["webm","mkv"]},{name:"VP9",value:"vp9",supported:["webm","mkv"]},{name:"copy",value:"copy",supported:null}],audio:[{name:"AAC",value:"aac",supported:["mp4","m4a","mkv"]},{name:"AC3",value:"ac3",supported:["mp4","mkv"]},{name:"DTS",value:"dts",supported:["mp4","mkv"]},{name:"Vorbis",value:"vorbis",supported:["mp4","mkv","ogg"]},{name:"Opus",value:"opus",supported:["mp4","mkv","ogg"]},{name:"LAME",value:"lame",supported:["mp3","mkv"]},{name:"ALAC",value:"alac",supported:["m4a"]},{name:"FLAC",value:"flac",supported:["flac","mkv"]},{name:"PCM",value:"pcm",supported:["mkv"]},{name:"Copy",value:"copy",supported:null},{name:"None",value:"none",supported:null}]},presets:[{name:"Placebo",value:"placebo"},{name:"Very Slow",value:"veryslow"},{name:"Slower",value:"slower"},{name:"Slow",value:"slow"},{name:"Medium",value:"medium"},{name:"Fast",value:"fast"},{name:"Faster",value:"faster"},{name:"Very Fast",value:"veryfast"},{name:"Super Fast",value:"superfast"},{name:"Ultra Fast",value:"ultrafast"},{name:"None",value:"none"}],hardwareAccelerationOptions:[{name:"Off",value:"off"},{name:"dxva2",value:"dxva2"},{name:"nvenc",value:"nvenc"}],passOptions:[{name:"CRF",value:"crf"},{name:"1 Pass",value:"1"},{name:"2 Pass",value:"2"}],pixelFormats:[{name:"auto",value:"auto"},{name:"gray",value:"gray"},{name:"gray10le",value:"gray10le"},{name:"nv12",value:"nv12"},{name:"nv16",value:"nv16"},{name:"nv20le",value:"nv20le"},{name:"nv21",value:"nv21"},{name:"yuv420p",value:"yuv420p"},{name:"yuv420p10le",value:"yuv420p10le"},{name:"yuv422p",value:"yuv422p"},{name:"yuv422p10le",value:"yuv422p10le"},{name:"yuv444p",value:"yuv444p"},{name:"yuv444p10le",value:"yuv444p10le"},{name:"yuvj420p",value:"yuvj420p"},{name:"yuvj422p",value:"yuvj422p"},{name:"yuvj444p",value:"yuvj444p"}],frameRates:[{name:"auto",value:"auto"},{name:"ntsc",value:"ntsc"},{name:"pal",value:"pal"},{name:"film",value:"film"},{name:"23.976",value:"24000/1001"},{name:"24",value:"24"},{name:"25",value:"25"},{name:"29.97",value:"30000/1001"},{name:"30",value:"30"},{name:"48",value:"48"},{name:"50",value:"50"},{name:"59.94",value:"60000/1001"},{name:"60",value:"60"}],speeds:[{name:"auto",value:"auto"},{name:"10%",value:"10*PTS"},{name:"25%",value:"4*PTS"},{name:"50%",value:"2*PTS"},{name:"75%",value:"1.33333*PTS"},{name:"150%",value:".66667*PTS"},{name:"200%",value:".5*PTS"},{name:"250%",value:".4*PTS"},{name:"300%",value:".33333*PTS"},{name:"500%",value:".2*PTS"}],tunes:[{name:"None",value:"none"},{name:"Film",value:"film"},{name:"Animation",value:"animation"},{name:"Grain",value:"grain"},{name:"Still Image",value:"stillimage"},{name:"Fast Decode",value:"fastdecode"},{name:"Zero Latency",value:"zerolatency"}],profiles:[{name:"None",value:"none"},{name:"Baseline",value:"baseline"},{name:"Main",value:"main"},{name:"High",value:"high"}],levels:[{name:"None",value:"none"},{name:"1.0",value:"1.0"},{name:"1.1",value:"1.1"},{name:"1.2",value:"1.2"},{name:"1.3",value:"1.3"},{name:"2.0",value:"2.0"},{name:"2.1",value:"2.1"},{name:"2.2",value:"2.2"},{name:"3.0",value:"3.0"},{name:"3.1",value:"3.1"},{name:"3.2",value:"3.2"},{name:"4.0",value:"4.0"},{name:"4.1",value:"4.1"},{name:"4.2",value:"4.2"},{name:"5.0",value:"5.0"},{name:"5.1",value:"5.1"},{name:"5.2",value:"5.2"}],optimize:[{name:"Web",value:"web"},{name:"None",value:"none"}],sizes:[{name:"Source",value:"source"},{name:"8K",value:"8192"},{name:"8K UHD",value:"7680"},{name:"4K",value:"4096"},{name:"4K UHD",value:"3840"},{name:"2K",value:"2048"},{name:"1600p",value:"2560"},{name:"1440p",value:"2560"},{name:"1200p",value:"1920"},{name:"1080p",value:"1920"},{name:"900p",value:"1600"},{name:"720p",value:"1280"},{name:"576p",value:"1024"},{name:"480p",value:"720"},{name:"320p",value:"480"},{name:"240p",value:"320"},{name:"Custom",value:"custom"}],formats:[{name:"Widescreen",value:"widescreen"},{name:"Full Screen",value:"fullscreen"}],aspects:[{name:"Auto",value:"auto"},{name:"1:1",value:"1:1"},{name:"2.4:1",value:"2.4:1"},{name:"3:2",value:"3:2"},{name:"4:3",value:"4:3"},{name:"5:4",value:"5:4"},{name:"8:7",value:"8:7"},{name:"14:10",value:"14:10"},{name:"16:9",value:"16:9"},{name:"16:10",value:"16:10"},{name:"19:10",value:"19:10"},{name:"21:9",value:"21:9"},{name:"32:9",value:"32:9"}],scalings:[{name:"Auto",value:"auto"},{name:"Neighbor",value:"neighbor"},{name:"Area",value:"area"},{name:"Fast Bilinear",value:"fastbilinear"},{name:"Bilinear",value:"bilinear"},{name:"Bicubic",value:"bicubic"},{name:"Experimental",value:"experimental"},{name:"Bicublin",value:"bicublin"},{name:"Gauss",value:"gauss"},{name:"Sinc",value:"sinc"},{name:"Lanczos",value:"lanczos"},{name:"Spline",value:"spline"}],audioStreams:[{name:"None",value:"none"},{name:"All",value:"all"},{name:"1",value:"1"},{name:"2",value:"2"},{name:"3",value:"3"},{name:"4",value:"4"},{name:"5",value:"5"},{name:"6",value:"6"},{name:"7",value:"7"},{name:"8",value:"8"}],audioChannels:[{name:"Source",value:"source"},{name:"Mono",value:"1"},{name:"Stereo",value:"2"},{name:"5.1",value:"6"}],audioQualities:[{name:"Auto",value:"auto"},{name:"400",value:"400k"},{name:"320",value:"320k"},{name:"256",value:"256k"},{name:"224",value:"224k"},{name:"192",value:"192k"},{name:"160",value:"160k"},{name:"128",value:"128k"},{name:"96",value:"96k"},{name:"Custom",value:"custom"},{name:"Mute",value:"mute"}],sampleRates:[{name:"Auto",value:"auto"},{name:"7.35k",value:"7350"},{name:"8k",value:"8000"},{name:"11.025k",value:"11025"},{name:"12k",value:"12000"},{name:"16k",value:"16000"},{name:"22.05k",value:"22050"},{name:"24k",value:"24000"},{name:"32k",value:"32000"},{name:"44.1k",value:"44100"},{name:"48k",value:"48000"}],deband:[{name:"None",value:!1},{name:"Enabled",value:!0}],deshake:[{name:"None",value:!1},{name:"Enabled",value:!0}],deflicker:[{name:"None",value:!1},{name:"Enabled",value:!0}],dejudder:[{name:"None",value:!1},{name:"Enabled",value:!0}],denoise:[{name:"None",value:"none"},{name:"Default",value:"default"},{name:"Light",value:"light"},{name:"Medium",value:"medium"},{name:"Heavy",value:"heavy"}],deinterlace:[{name:"None",value:"none"},{name:"Frame",value:"frame"},{name:"Field",value:"field"},{name:"Frame Nospatial",value:"frame_nospatial"},{name:"Field Nospatial",value:"field_nospatial"}],extraOptions:[{text:"Force output file format.",value:"f"},{text:"Overwrite output files without asking.",value:"y"}]},f=v,d={x264:"libx264",x265:"libx265",vp8:"libvpx",vp9:"libvpx-vp9",av1:"libaom-av1",mpeg2:"mpeg2video",mpeg4:"mpeg4 -vtag xvid",theora:"libtheora",aac:"aac",alac:"alac",dts:"dca",ac3:"ac3",vorbis:"libvorbias",copy:"copy"},b=d,h=(t("99af"),t("4160"),t("caad"),t("a15b"),t("d81d"),t("fb6a"),t("b64b"),t("e25e"),t("2532"),t("159b"),t("2909")),g={startTime:"-ss",stopTime:"-to"},y={vcodec:"-c:v",preset:"-preset",bitrate:"-b:v",minrate:"-minrate",maxrate:"-maxrate",bufsize:"-bufsize",pixelFormat:"-pix_fmt",frameRate:"-r",tune:"-tune",profile:"-profile:v",level:"-level",aspect:"-aspect"},_={acodec:"-c:a",sampleRate:"-ar"};function O(e,a){var t=[];return Object.keys(e).forEach((function(n){if(a[n]&&"none"!==a[n]&&"auto"!==a[n]){var r=[e[n],a[n]];t.push.apply(t,r)}})),t}function P(e){var a=[];if(e.speed&&"auto"!==e.speed){var t=["setpts=".concat(e.speed)];a.push.apply(a,t)}var n,r=[];e.size&&"source"!==e.size&&(n="custom"===e.size?["scale=".concat(e.width,":").concat(e.height)]:"widescreen"===e.format?["scale=".concat(e.size,":-1")]:["scale=-1:".concat(e.size)],r.push.apply(r,Object(h["a"])(n)));if(e.scaling&&"auto"!==e.scaling){var o=["flags=".concat(e.scaling)];r.push.apply(r,o)}if(r.length>0&&a.push(r.join(":")),e.deband){var l=["deband"];a.push.apply(a,l)}if(e.deshake){var u=["deshake"];a.push.apply(a,u)}if(e.deflicker){var i=["deflicker"];a.push.apply(a,i)}if(e.dejudder){var s=["dejudder"];a.push.apply(a,s)}if("none"!==e.denoise){var p;switch(e.denoise){case"light":p=["removegrain=22"];break;case"medium":p=["vaguedenoiser=threshold=3:method=soft:nsteps=5"];break;case"heavy":p=["vaguedenoiser=threshold=6:method=soft:nsteps=5"];break;default:p=["removegrain=0"];break}a.push.apply(a,Object(h["a"])(p))}if("none"!==e.deinterlace){var c;switch(e.deinterlace){case"frame":c=["yadif=0:-1:0"];break;case"field":c=["yadif=1:-1:0"];break;case"frame_nospatial":c=["yadif=2:-1:0"];break;case"field_nospatial":c=["yadif=3:-1:0"];break;default:break}a.push.apply(a,Object(h["a"])(c))}var m=[];if(0!==parseInt(e.contrast,10)){var v=["contrast=".concat(e.contrast)];m.push.apply(m,v)}if(0!==parseInt(e.brightness,10)){var f=["brightness=".concat(e.brightness/100)];m.push.apply(m,f)}if(0!==parseInt(e.saturation,10)){var d=["saturation=".concat(e.saturation)];m.push.apply(m,d)}if(0!==parseInt(e.gamma,10)){var b=["gamma=".concat(e.gamma/10)];m.push.apply(m,b)}if(m.length>0){var g=m.join(":");a.push("eq=".concat(g))}return a.join(",")}function w(e){var a=[];if(e.volume&&100!==parseInt(e.volume,10)){var t=["volume=".concat(e.volume/100)];a.push.apply(a,t)}return a.join(",")}function j(e){var a="/dev/null && \\ \n",t=e.slice();return e.push.apply(e,["-pass","1",a]),t.push.apply(t,["-pass","2"]),t}function k(e){return O(g,e)}function x(e){var a=O(y,e);if("nvenc"===e.hardwareAccelerationOption)a.map((function(e,t){"libx264"===e?a[t]="h264_nvenc":"libx265"===e&&(a[t]="hevc_nvenc")}));else if("off"!==e.hardwareAccelerationOption){var t=["-hwaccel",e.hardwareAccelerationOption];a.push.apply(a,t)}if("0"!==e.crf&&"crf"===e.pass){var n=["-crf",e.crf];a.push.apply(a,n)}if(e.optimize&&"none"!==e.optimize){var r=["-movflags","faststart"];a.push.apply(a,r)}return a}function C(e){var a=O(_,e);if(e.channel&&"source"!==e.channel){var t=["-rematrix_maxval","1.0","-ac",e.channel];a.push.apply(a,t)}if(e.quality&&"auto"!==e.quality){var n=["-b:a","custom"===e.quality?e.audioBitrate:e.quality];a.push.apply(a,n)}return a}function S(e){var a=e||{},t=a.input,n=a.output,r=a.container,o=["ffmpeg","-i","".concat(t)];if(a.clip){var l=k(a);o.push.apply(o,Object(h["a"])(l))}var u=x(a);o.push.apply(o,Object(h["a"])(u));var i=P(a);i&&o.push('-vf "'.concat(i,'"'));var s=C(a);o.push.apply(o,Object(h["a"])(s));var p=w(a);if(p&&o.push('-af "'.concat(p,'"')),"2"===a.pass){var c=j(o);o.push.apply(o,Object(h["a"])(c))}var m=[];if(a.extra.includes("f")){var v=["-f",r];m.push.apply(m,v)}if(a.extra.includes("y")){var f=["-y"];m.push.apply(m,f)}return m.push(n),o.push.apply(o,m),o.join(" ")}var z={build:S},F=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-form-row",[t("b-col",[t("b-form-group",{attrs:{label:"Container:","label-for":"container"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.container},on:{input:function(a){return e.update("container",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.containers,(function(a,n){return t("optgroup",{key:n,attrs:{label:n}},e._l(a,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])})),0)}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Clip:","label-for":"clip"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.clip},on:{input:function(a){return e.update("clip",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.clip,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),e.value.clip?t("b-col",[t("b-form-group",{attrs:{label:"Start Time:","label-for":"start-time"}},[t("b-form-input",{attrs:{value:e.value.startTime,placeholder:"00:00:00.000"},on:{input:function(a){return e.update("startTime",a)}}})],1)],1):e._e(),e.value.clip?t("b-col",[t("b-form-group",{attrs:{label:"Stop Time:","label-for":"stop-time"}},[t("b-form-input",{attrs:{value:e.value.stopTime,placeholder:"00:00:00.000"},on:{input:function(a){return e.update("stopTime",a)}}})],1)],1):e._e()],1)],1)},T=[],A=(t("a4d3"),t("4de4"),t("e439"),t("dbb4"),t("ade3"));function E(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?E(Object(t),!0).forEach((function(a){Object(A["a"])(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var D=f.containers,R=f.clip,$={name:"Format",props:["value"],data:function(){return{containers:D,clip:R}},methods:{update:function(e,a){this.$emit("input",N({},this.value,Object(A["a"])({},e,a)))}}},M=$,V=t("2877"),q=Object(V["a"])(M,F,T,!1,null,null,null),B=q.exports,J=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-form-row",[t("b-col",[t("b-form-group",{attrs:{label:"Codec:","label-for":"codec"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.codec},on:{input:function(a){return e.update("codec",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.filteredVideoCodecs,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Preset:","label-for":"preset"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.preset},on:{input:function(a){return e.update("preset",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.presets,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Hardware Acceleration:","label-for":"hw-accel"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.hardware_acceleration_option},on:{input:function(a){return e.update("hardware_acceleration_option",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.hardwareAccelerationOptions,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Pass:","label-for":"pass"}},[t("b-form-select",{staticClass:"u-full-width mb-2",attrs:{value:e.value.pass},on:{input:function(a){return e.update("pass",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.passOptions,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1)],1),"crf"==e.value.pass?t("div",[t("b-form-group",{attrs:{label:"CRF:"+e.value.crf,"label-for":"crf"}},[t("b-form-input",{attrs:{id:"crf",value:e.value.crf,type:"range",min:"0",max:"51"},on:{input:function(a){return e.update("crf",a)}}})],1)],1):e._e(),t("hr"),t("b-form-row",[t("b-col",[t("b-form-group",{attrs:{label:"Bitrate:","label-for":"bitrate"}},[t("b-form-input",{attrs:{value:e.value.bitrate,placeholder:"Bitrate"},on:{input:function(a){return e.update("bitrate",a)}}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Min Rate:","label-for":"minrate"}},[t("b-form-input",{attrs:{value:e.value.minrate,placeholder:"Bitrate"},on:{input:function(a){return e.update("minrate",a)}}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Max Rate:","label-for":"maxrate"}},[t("b-form-input",{attrs:{value:e.value.maxrate,placeholder:"Bitrate"},on:{input:function(a){return e.update("maxrate",a)}}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Buffer Size:","label-for":"bufsize"}},[t("b-form-input",{attrs:{value:e.value.bufsize,placeholder:"Buffer Size"},on:{input:function(a){return e.update("bufsize",a)}}})],1)],1)],1),t("hr"),t("b-form-row",[t("b-col",[t("b-form-group",{attrs:{label:"Pixel Format:","label-for":"pixel_format"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.pixel_format},on:{input:function(a){return e.update("pixel_format",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.pixelFormats,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Frame Rate:","label-for":"frame_rate"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.frame_rate},on:{input:function(a){return e.update("frame_rate",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.frameRates,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Speed:","label-for":"speed"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.speed},on:{input:function(a){return e.update("speed",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.speeds,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Tune:","label-for":"tune"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.tune},on:{input:function(a){return e.update("tune",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.tunes,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Profile:","label-for":"profile"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.profile},on:{input:function(a){return e.update("profile",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.profiles,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Level:","label-for":"level"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.level},on:{input:function(a){return e.update("level",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.levels,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1)],1),t("hr"),t("b-form-row",[t("b-col",[t("b-form-group",{attrs:{label:"Optimize for Web:","label-for":"optimize"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.optimize},on:{input:function(a){return e.update("optimize",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.optimize,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Size:","label-for":"size"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.size},on:{input:function(a){return e.update("size",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.sizes,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),"custom"==e.value.size?t("b-col",[t("b-form-group",{attrs:{label:"Width:","label-for":"width"}},[t("b-form-input",{attrs:{value:e.value.width,placeholder:"Width"},on:{input:function(a){return e.update("width",a)}}})],1)],1):e._e(),"custom"==e.value.size?t("b-col",[t("b-form-group",{attrs:{label:"Height:","label-for":"height"}},[t("b-form-input",{attrs:{value:e.value.height,placeholder:"Height"},on:{input:function(a){return e.update("height",a)}}})],1)],1):e._e(),t("b-col",[t("b-form-group",{attrs:{label:"Format:","label-for":"format"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.format},on:{input:function(a){return e.update("format",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.formats,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Aspect Ratio:","label-for":"aspect-ratio"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.aspect},on:{input:function(a){return e.update("aspect",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.aspects,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Scaling:","label-for":"scaling"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.scaling},on:{input:function(a){return e.update("scaling",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.scalings,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1)],1)],1)},H=[];function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(Object(t),!0).forEach((function(a){Object(A["a"])(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var G=f.codecs,W=f.presets,K=f.hardwareAccelerationOptions,Q=f.passOptions,U=f.pixelFormats,Z=f.frameRates,X=f.speeds,Y=f.tunes,ee=f.profiles,ae=f.levels,te=f.optimize,ne=f.sizes,re=f.formats,oe=f.aspects,le=f.scalings,ue={name:"Video",props:["value","container"],data:function(){return{codecs:G,presets:W,hardwareAccelerationOptions:K,passOptions:Q,pixelFormats:U,frameRates:Z,speeds:X,tunes:Y,profiles:ee,levels:ae,optimize:te,sizes:ne,formats:re,aspects:oe,scalings:le}},computed:{filteredVideoCodecs:function(){var e=this;return this.codecs.video.filter((function(a){return!a.supported||a.supported.includes(e.container)}))}},methods:{update:function(e,a){this.$emit("input",L({},this.value,Object(A["a"])({},e,a)))}}},ie=ue,se=Object(V["a"])(ie,J,H,!1,null,null,null),pe=se.exports,ce=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-form-row",[t("b-col",[t("b-form-group",{attrs:{label:"Codec:","label-for":"audio-codec"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.codec},on:{input:function(a){return e.update("codec",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.filteredAudioCodecs,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Channel:","label-for":"audio-channels"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.channel},on:{input:function(a){return e.update("channel",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.audioChannels,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Quality:","label-for":"audio-quality"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.quality},on:{input:function(a){return e.update("quality",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.audioQualities,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),"custom"==e.value.quality?t("b-col",[t("b-form-group",{attrs:{label:"Bitrate:","label-for":"bitrate"}},[t("b-form-input",{attrs:{value:e.value.bitrate},on:{input:function(a){return e.update("bitrate",a)}}})],1)],1):e._e(),t("b-col",[t("b-form-group",{attrs:{label:"Sample Rate:","label-for":"audio-sample-rate"}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value.sampleRate},on:{input:function(a){return e.update("sampleRate",a)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(e.sampleRates,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Volume:","label-for":"volume"}},[t("b-form-input",{attrs:{value:e.value.volume,type:"number"},on:{input:function(a){return e.update("volume",a)}}})],1)],1)],1)],1)},me=[];function ve(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function fe(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ve(Object(t),!0).forEach((function(a){Object(A["a"])(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ve(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var de=f.codecs,be=f.audioChannels,he=f.audioQualities,ge=f.sampleRates,ye={name:"Audio",props:["value","container"],data:function(){return{codecs:de,audioChannels:be,audioQualities:he,sampleRates:ge}},computed:{filteredAudioCodecs:function(){var e=this;return this.codecs.audio.filter((function(a){return!a.supported||a.supported.includes(e.container)}))}},methods:{update:function(e,a){this.$emit("input",fe({},this.value,Object(A["a"])({},e,a)))}}},_e=ye,Oe=Object(V["a"])(_e,ce,me,!1,null,null,null),Pe=Oe.exports,we=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h4",[e._v("Video")]),t("hr"),t("b-form-row",e._l(e.items,(function(a){return t("b-col",{key:a.name},[t("b-form-group",{attrs:{label:a.name+":","label-for":a.name}},[t("b-form-select",{staticClass:"u-full-width",attrs:{value:e.value[a.name]},on:{input:function(t){return e.update(a.name,t)}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select an option --")]),e._l(a.config,(function(a){return t("option",{key:a.id,domProps:{value:a.value}},[e._v(e._s(a.name))])}))],2)],1)],1)})),1),t("b-form-row",e._l(e.eq,(function(a){return t("b-col",{key:a.name},[t("b-form-group",{attrs:{label:a.name+":","label-for":a.name}},[t("b-form-input",{attrs:{id:a.name,value:e.value[a.name],type:"range",min:a.min,max:a.max},on:{input:function(t){return e.update(a.name,t)}}})],1)],1)})),1)],1)},je=[];function ke(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function xe(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ke(Object(t),!0).forEach((function(a){Object(A["a"])(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ke(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Ce=f.deband,Se=f.deshake,ze=f.deflicker,Fe=f.dejudder,Te=f.denoise,Ae=f.deinterlace,Ee={name:"Filters",props:["value"],data:function(){return{items:[{name:"deband",config:Ce},{name:"deflicker",config:ze},{name:"deshake",config:Se},{name:"dejudder",config:Fe},{name:"denoise",config:Te},{name:"deinterlace",config:Ae}],eq:[{name:"contrast",min:-1e3,max:1e3},{name:"brightness",min:-100,max:100},{name:"saturation",min:0,max:300},{name:"gamma",min:1,max:100}]}},methods:{update:function(e,a){this.$emit("input",xe({},this.value,Object(A["a"])({},e,a)))}}},Ne=Ee,De=Object(V["a"])(Ne,we,je,!1,null,null,null),Re=De.exports,$e=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-form-row",[t("b-col",[t("b-form-group",{attrs:{label:"Extra Flags:"}},e._l(e.extraOptions,(function(a){return t("b-form-checkbox",{key:a.value,attrs:{value:a.value,switch:""},on:{input:function(a){return e.update("extra",a)}},model:{value:e.extra,callback:function(a){e.extra=a},expression:"extra"}},[e._v(" "+e._s(a.text)+" ")])})),1)],1)],1)],1)},Me=[];function Ve(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function qe(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Ve(Object(t),!0).forEach((function(a){Object(A["a"])(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ve(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Be=f.extraOptions,Je={name:"Filters",props:["value"],data:function(){return{extra:[],extraOptions:Be}},methods:{update:function(e,a){this.$emit("input",qe({},this.value,Object(A["a"])({},e,a)))}}},He=Je,Ie=Object(V["a"])(He,$e,Me,!1,null,null,null),Le=Ie.exports,Ge=f.containers,We=f.codecs,Ke={name:"Editor",components:{Format:B,Video:pe,Audio:Pe,Filters:Re,Options:Le},props:{},data:function(){return{form:{input:"input.mp4",output:"output.mp4",format:{container:"mp4",clip:!1,startTime:null,stopTime:null},video:{codec:"x264",preset:"none",hardware_acceleration_option:"off",pass:"1",crf:23,bitrate:null,minrate:null,maxrate:null,bufsize:null,pixel_format:"auto",frame_rate:"auto",speed:"auto",tune:"none",profile:"none",level:"none",optimize:"none",size:"source",width:"1080",height:"1920",format:"widescreen",aspect:"auto",scaling:"auto"},audio:{codec:"copy",channel:"source",quality:"auto",sampleRate:"auto",volume:100},filters:{deband:!1,deshake:!1,deflicker:!1,dejudder:!1,denoise:"none",deinterlace:"none",brightness:0,contrast:0,saturation:0,gamma:0},options:{extra:[]}},containers:Ge,codecs:We,cmd:null,showJSON:!1}},computed:{formString:function(){var e=this.form,a=this.transformToJSON(e),t=JSON.stringify(a,(function(e,a){if(null!==a)return a}),2);return t}},created:function(){this.generateCommand()},watch:{form:{handler:function(){this.updateOutput(),this.generateCommand()},deep:!0}},methods:{updateFile:function(e){this.form.input=e?e.name:"",this.updateOutput(),this.generateCommand()},generateCommand:function(){var e=this.form,a=e.input,t=e.output,n=e.format,r=e.video,o=e.audio,l=e.filters,u=e.options,i={input:a,output:t,container:n.container,clip:n.clip,startTime:n.startTime,stopTime:n.stopTime,vcodec:b[r.codec],preset:r.preset,hardwareAccelerationOption:r.hardware_acceleration_option,pass:r.pass,crf:r.crf,bitrate:r.bitrate,minrate:r.minrate,maxrate:r.maxrate,bufsize:r.bufsize,pixelFormat:r.pixel_format,frameRate:r.frame_rate,speed:r.speed,tune:r.tune,profile:r.profile,level:r.level,optimize:r.optimize,size:r.size,width:r.width,height:r.height,format:r.format,aspect:r.aspect,scaling:r.scaling,acodec:b[o.codec],channel:o.channel,quality:o.quality,audioBitrate:o.bitrate,sampleRate:o.sampleRate,volume:o.volume,deband:l.deband,deshake:l.deshake,deflicker:l.deflicker,dejudder:l.dejudder,denoise:l.denoise,deinterlace:l.deinterlace,brightness:l.brightness,contrast:l.contrast,saturation:l.saturation,gamma:l.gamma,extra:u.extra};this.cmd=z.build(i)},updateOutput:function(){if(this.form.output){var e=this.form,a=e.format,t=e.output,n=m.a.extname(t);this.form.output="".concat(t.replace(n,".".concat(a.container)))}},copyToClipboard:function(){var e=this.$refs.code;e.select(),document.execCommand("copy")},toggleJSON:function(){this.showJSON=!this.showJSON},transformToJSON:function(e){var a=e.format,t=e.video,n=e.audio,r=e.filters,o={format:{container:a.container,clip:a.clip,startTime:a.startTime,stopTime:a.stopTime},video:{codec:b[t.codec],preset:t.preset,hardware_acceleration_option:t.hardware_acceleration_option,pass:t.pass,crf:t.crf,bitrate:t.bitrate,minrate:t.minrate,maxrate:t.maxrate,bufsize:t.bufsize,pixel_format:t.pixel_format,frame_rate:t.frame_rate,speed:t.speed,tune:t.tune,profile:t.profile,level:t.level,optimize:t.optimize,size:t.size,width:t.width,height:t.height,format:t.format,aspect:t.aspect,scaling:t.scaling},audio:{codec:b[n.codec],channel:n.channel,quality:n.quality,bitrate:n.bitrate,sampleRate:n.sampleRate,volume:n.volume},filter:{deband:r.deband,deshake:r.deshake,deflicker:r.deflicker,dejudder:r.dejudder,denoise:r.denoise,deinterlace:r.deinterlace,brightness:r.brightness,contrast:r.contrast,saturation:r.saturation,gamma:r.gamma}};return o}}},Qe=Ke,Ue=(t("d062"),Object(V["a"])(Qe,s,p,!1,null,"29b7c808",null)),Ze=Ue.exports,Xe={name:"app",components:{Editor:Ze}},Ye=Xe,ea=(t("034f"),Object(V["a"])(Ye,u,i,!1,null,null,null)),aa=ea.exports;t("f9e3"),t("2dd8"),t("a56e");n["default"].use(r["a"]),n["default"].use(l.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(aa)}}).$mount("#app")},"85ec":function(e,a,t){},a379:function(e,a,t){e.exports=t.p+"img/ffmpeg.7c2ab932.svg"},a56e:function(e,a,t){},b86d:function(e,a,t){},d062:function(e,a,t){"use strict";var n=t("b86d"),r=t.n(n);r.a}});
//# sourceMappingURL=app.e7b30228.js.map
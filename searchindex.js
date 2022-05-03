Search.setIndex({docnames:["algorithms","architecture","components","design","development","evaluation","index","reader-studies","workstations"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["algorithms.rst","architecture.rst","components.rst","design.rst","development.rst","evaluation.rst","index.rst","reader-studies.rst","workstations.rst"],objects:{"grandchallenge.components":[[2,0,0,"-","models"]],"grandchallenge.components.models":[[2,1,1,"","ComponentInterface"],[2,1,1,"","ComponentInterfaceValue"],[2,1,1,"","DurationQuerySet"],[2,1,1,"","InterfaceKind"],[2,1,1,"","InterfaceKindChoices"],[2,1,1,"","InterfaceSuperKindChoices"]],"grandchallenge.components.models.ComponentInterface":[[2,2,1,"","DoesNotExist"],[2,3,1,"","Kind"],[2,2,1,"","MultipleObjectsReturned"],[2,4,1,"","clean"],[2,4,1,"","validate_against_schema"]],"grandchallenge.components.models.ComponentInterfaceValue":[[2,2,1,"","DoesNotExist"],[2,2,1,"","MultipleObjectsReturned"],[2,4,1,"","clean"],[2,5,1,"","decompress"],[2,3,1,"","image_file"],[2,5,1,"","input_file"],[2,5,1,"","relative_path"]],"grandchallenge.components.models.DurationQuerySet":[[2,4,1,"","average_duration"],[2,4,1,"","with_duration"]],"grandchallenge.components.models.InterfaceKind":[[2,1,1,"","InterfaceKindChoices"],[2,4,1,"","interface_type_file"],[2,4,1,"","interface_type_image"],[2,4,1,"","interface_type_json"]],"grandchallenge.evaluation.models":[[5,1,1,"","Phase"]],"grandchallenge.evaluation.models.Phase":[[5,2,1,"","DoesNotExist"],[5,2,1,"","MultipleObjectsReturned"],[5,1,1,"","SubmissionKind"],[5,4,1,"","__init__"],[5,4,1,"","clean"],[5,4,1,"","get_next_submission"],[5,4,1,"","save"]],"grandchallenge.evaluation.templatetags":[[5,0,0,"-","evaluation_extras"]],"grandchallenge.evaluation.templatetags.evaluation_extras":[[5,6,1,"","get_jsonpath"]],"grandchallenge.reader_studies":[[7,0,0,"-","models"]],"grandchallenge.reader_studies.models":[[7,1,1,"","Answer"],[7,1,1,"","AnswerType"],[7,1,1,"","CategoricalOption"],[7,1,1,"","DisplaySet"],[7,7,1,"","HANGING_LIST_SCHEMA"],[7,7,1,"","IMAGE_PORT_OVERLAYS"],[7,1,1,"","Question"],[7,1,1,"","ReaderStudy"],[7,1,1,"","ReaderStudyPermissionRequest"],[7,6,1,"","delete_reader_study_groups_hook"]],"grandchallenge.reader_studies.models.Answer":[[7,2,1,"","DoesNotExist"],[7,2,1,"","MultipleObjectsReturned"],[7,5,1,"","api_url"],[7,4,1,"","calculate_score"],[7,5,1,"","csv_values"],[7,4,1,"","save"],[7,4,1,"","save_without_historical_record"],[7,4,1,"","validate"]],"grandchallenge.reader_studies.models.CategoricalOption":[[7,2,1,"","DoesNotExist"],[7,2,1,"","MultipleObjectsReturned"]],"grandchallenge.reader_studies.models.DisplaySet":[[7,2,1,"","DoesNotExist"],[7,2,1,"","MultipleObjectsReturned"],[7,5,1,"","api_url"],[7,4,1,"","save"]],"grandchallenge.reader_studies.models.Question":[[7,1,1,"","AnswerType"],[7,1,1,"","Direction"],[7,2,1,"","DoesNotExist"],[7,2,1,"","MultipleObjectsReturned"],[7,1,1,"","ScoringFunction"],[7,5,1,"","api_url"],[7,4,1,"","calculate_score"],[7,4,1,"","clean"],[7,5,1,"","csv_values"],[7,4,1,"","is_answer_valid"],[7,5,1,"","is_fully_editable"],[7,5,1,"","read_only_fields"],[7,4,1,"","save"]],"grandchallenge.reader_studies.models.ReaderStudy":[[7,2,1,"","DoesNotExist"],[7,2,1,"","MultipleObjectsReturned"],[7,4,1,"","add_editor"],[7,4,1,"","add_ground_truth"],[7,4,1,"","add_reader"],[7,3,1,"","answerable_question_count"],[7,3,1,"","answerable_questions"],[7,4,1,"","clean"],[7,4,1,"","get_hanging_list_images_for_user"],[7,4,1,"","get_progress_for_user"],[7,5,1,"","hanging_image_names"],[7,4,1,"","hanging_list_diff"],[7,5,1,"","hanging_list_images"],[7,5,1,"","hanging_list_valid"],[7,5,1,"","help_text"],[7,5,1,"","image_groups"],[7,4,1,"","is_editor"],[7,4,1,"","is_reader"],[7,5,1,"","is_valid"],[7,3,1,"","leaderboard"],[7,5,1,"","non_unique_study_image_names"],[7,4,1,"","remove_editor"],[7,4,1,"","remove_reader"],[7,4,1,"","save"],[7,4,1,"","score_for_user"],[7,3,1,"","scores_by_user"],[7,3,1,"","statistics"],[7,5,1,"","study_image_names"]],"grandchallenge.reader_studies.models.ReaderStudyPermissionRequest":[[7,2,1,"","DoesNotExist"],[7,2,1,"","MultipleObjectsReturned"],[7,4,1,"","save"]],"grandchallenge.workstations":[[8,0,0,"-","models"]],"grandchallenge.workstations.models":[[8,1,1,"","Session"],[8,1,1,"","Workstation"],[8,1,1,"","WorkstationImage"],[8,6,1,"","delete_workstation_groups_hook"]],"grandchallenge.workstations.models.Session":[[8,2,1,"","DoesNotExist"],[8,2,1,"","MultipleObjectsReturned"],[8,1,1,"","Region"],[8,5,1,"","environment"],[8,5,1,"","expires_at"],[8,5,1,"","hostname"],[8,4,1,"","save"],[8,4,1,"","save_without_historical_record"],[8,5,1,"","service"],[8,4,1,"","start"],[8,4,1,"","stop"],[8,5,1,"","task_kwargs"],[8,4,1,"","update_status"],[8,5,1,"","workstation_url"]],"grandchallenge.workstations.models.Workstation":[[8,2,1,"","DoesNotExist"],[8,2,1,"","MultipleObjectsReturned"],[8,3,1,"","latest_ready_image"],[8,4,1,"","save"]],"grandchallenge.workstations.models.WorkstationImage":[[8,2,1,"","DoesNotExist"],[8,2,1,"","MultipleObjectsReturned"],[8,4,1,"","save"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","exception","Python exception"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","property","Python property"],"6":["py","function","Python function"],"7":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:exception","3":"py:attribute","4":"py:method","5":"py:property","6":"py:function","7":"py:data"},terms:{"0":[0,2,4,5,8],"00":5,"000":5,"0000":5,"000000":5,"0000000000":5,"0145263671875":2,"014717102050":2,"01471710205078":2,"04":4,"0511828696491":2,"06":7,"06666564941406":2,"06668090820312":2,"08":3,"0865406433515":2,"1":[0,2,4,5,7,8],"10":[0,2,4,5],"103":2,"10653686523438":2,"1080882991":5,"10b0":4,"11":5,"1107":5,"111":[2,5],"1131982359":5,"1131987870":5,"113669":5,"113704":5,"11389145837530869":5,"115":2,"1199810886":5,"1199810941":5,"12":5,"12096508479974993":5,"124":2,"1280x640":7,"130":2,"13333129882812":2,"136":2,"139":2,"14":5,"143":2,"148":2,"152":2,"159":2,"16":5,"16gb":0,"1762676169":5,"19":4,"1941215380842":2,"1970585994056237":5,"198":2,"2":[0,2,4,5,7,8],"20":4,"200":0,"200036":5,"2004":5,"20090213134050413":5,"20090213134114792":5,"2018":4,"2019":3,"2020":4,"21":5,"2256":5,"22666564941406":2,"22667370505269":2,"2296":5,"246671966051736":2,"24gb":0,"26666259765625":2,"26667022705078":2,"276":5,"28":5,"2d":[2,7],"3":[2,5,7,8],"300":2,"30665911965434":2,"30850713624139353":5,"32923801642370615":5,"33921128662283":2,"365":5,"376":2,"3770174983296798":5,"38014221191406":2,"3825556854":5,"390606191418956020":5,"392":5,"3d":7,"4":[0,2,5,7,8],"40":2,"413756408691":2,"41375842260106":2,"41694876387268":2,"42642285078242":2,"4274305543159676":5,"4378269970777743":5,"4400":5,"46666717529297":2,"4715406247268339":5,"47626890640360103":5,"47729852440408627":5,"48666162159475":2,"49":2,"4d":7,"5":[2,5],"5009999871253967":2,"50585":5,"5091027839007266":5,"512":0,"5171983108978807":5,"5197109875240358":5,"52300262451172":2,"53333282470703":2,"538251028":5,"54":2,"5475856316815167":5,"55":2,"56":2,"5686766693547471":5,"59":2,"5988810496224731":5,"6":[2,5],"6004146364647982":5,"632":5,"640x320":7,"6452332692745784":5,"6461774875144065":5,"64666967723338":2,"66666412353516":2,"66666793823242":2,"6747092236948878":5,"6817807628480707":5,"6839602948067993":5,"69":2,"7":[2,5],"7023259421321855":5,"7250400040547097":5,"73":2,"73332977294922":2,"733333587646484":2,"75546264648438":2,"76":2,"76753997802734":2,"78":2,"79":[2,4],"79176712036133":2,"7941200122053":2,"79999923706055":2,"8":[2,5],"8000":4,"80001831054688":2,"82666793823242":2,"82667599387105":2,"83292388916016":2,"840":5,"86":4,"86666870117188":2,"88666314747366":2,"9":[2,5],"90":2,"91":2,"9116":5,"92":2,"93921357544119":2,"95":2,"96":2,"abstract":3,"boolean":0,"case":[2,3,5,6],"catch":[7,8],"class":[2,5,7,8],"default":[0,2,4,5,7],"do":[2,4,5,7,8],"export":[4,7],"float":2,"function":[1,7],"import":[0,1,4],"long":1,"new":[0,1,5,6,8],"public":[5,7,8],"return":[5,7,8],"static":[2,7],"true":[2,5,7,8],A:[0,1,3,5,7,8],As:[0,4],At:[3,4],For:[4,5,7],If:[0,4,5,7,8],In:[3,4,6],Is:[7,8],It:[0,3,4,5,7],On:4,One:1,Or:4,The:[0,1,2,3,5,7,8],Then:4,There:[1,4],These:[0,1,3,4],To:[0,4,7],_:[7,8],__:[7,8],__init__:5,_build:4,abl:[1,4,5,6,7,8],about:[3,7],abov:4,accept:[4,7],access:[0,3,5,6,7,8],access_request_handl:7,accompani:7,account:5,across:7,action:[4,5,7],action_object_act:[5,7],activ:[4,8],actor:[5,7],actor_act:[5,7],ad:6,add:[4,6,7],add_editor:7,add_ground_truth:7,add_read:7,addit:[2,4,5,6],additionalproperti:7,admin:[5,8],administ:4,administr:5,affin:0,after:[2,4,5,7,8],against:[2,7],aggreg:5,alg_fnam:5,algorithm:[4,5,6],algorithm_input:5,algorithm_output:5,algorithm_time_limit:5,alia:2,all:[0,3,4,5,7,8],allow:[0,1,4,5,7],allow_answer_modif:7,allow_case_brows:7,allow_case_navig:7,allow_show_all_annot:7,allow_submission_com:5,along:5,alongsid:4,also:[4,7,8],altern:4,amount:6,an:[1,2,3,4,5,6,7,8],anew:7,ani:[0,2,3,4,5,7,8],annot:[0,1,2,6,7,8],anoth:7,answer:7,answer_imag:7,answer_typ:7,answer_type_schema:7,answerable_quest:7,answerable_question_count:7,answertyp:7,anyth:2,anywher:2,api:[7,8],api_url:7,app:[3,4],appear:7,appli:[4,5,7],applic:[1,3,6],ar:[1,2,3,4,5,6,7,8],architectur:6,archiv:[4,5,6,8],arg:[2,5,7,8],argument:[4,5],arrai:[2,7],art:6,articl:5,ask:6,assess:6,assign:7,assist:6,associ:[2,5,7],assum:3,asynchron:1,attributeerror:5,auth:8,auth_token:8,authtoken:8,auto:5,auto_publish_new_result:5,autofield:[2,7],automat:[0,5,7],autoslugfield:[2,5,7,8],avail:[1,7],averag:[2,7],average_dur:2,axi:2,back:7,backend:[4,5,7,8],base:[5,7],basi:3,becaus:0,becom:3,been:[2,3,5,7,8],befor:[4,5,7,8],behind:1,belong:3,below:4,best:[4,5,7],between:[1,2,3,4,7],bigautofield:2,biomed:6,black:[2,4],blog:2,bool:[2,7],booleanfield:[2,5,7,8],both:[0,2,7],bound:[2,7],box:[2,4,5,7],brace:4,branch:4,breakpoint:4,browser:1,brush:2,build:6,buildx:4,built:4,bulk_delet:[7,8],c4:1,c:[4,8],calcul:[2,5,7],calculate_scor:7,call:[2,5,7],can:[1,3,4,5,6,7,8],cannot:[4,8],captur:0,case_text:7,cat:4,categoricalopt:7,cd:4,celeri:[1,4,5,8],certain:2,certif:4,challeng:[0,1,2,3,4,5,7,8],chang:[4,7],charfield:[2,5,7,8],chart:2,check:[4,7],checkbox:4,checkout:4,choic:[1,2,3,5],choos:4,chosen:[7,8],civ:2,clean:[2,5,7,8],clean_field:[2,5,7],click:4,clinic:[1,6],clinician:[1,6],clobber:2,clone:4,close:5,code:[0,4,5],codebas:[3,4],cog:4,collabor:6,collect:1,color:[2,3],column:5,com:[4,8],combin:3,comic:4,command:[4,8],commandlin:8,comment:[4,5],commercialis:6,commit:4,commun:1,compar:7,comparison:6,compat:[3,4],complet:[2,4,7],compon:[0,6,8],componentexcept:8,componentinterfac:[0,2],componentinterfacevalu:2,comput:1,condit:2,config:[2,4,7,8],conflict:4,connect:[1,2,8],consid:5,consist:[3,7],consol:4,constrain:3,contain:[0,3,4,6,7,8],content:[0,7],context:6,contribut:3,control:[4,5,7,8],copi:0,copyinform:0,core:8,corner:2,correct:[0,4,7],correctli:4,correspond:[0,4,5],could:8,count:2,cover:1,cpu:[0,4,8],crash:4,creat:[0,1,5,6,8],create_io_algorithm:4,creator:[5,7,8],creator_must_be_verifi:5,csv:[2,5,7],csv_valu:7,ctrl:4,cuda:0,current:[0,3,5,7,8],custom:2,customis:7,cycl:4,cycle_docker_compos:4,d:4,dai:5,data:[1,2,3,4,5,6,7],databas:[2,4,5,6],dataload:0,dataset:5,datetim:8,datetimefield:[5,7,8],datum:2,db:4,dcm:7,debug:4,debugg:4,decid:3,decim:5,decimalfield:8,decis:6,decompress:2,deep:6,default_valu:2,defin:[0,1,2,4,5,6],definit:[6,7],delet:[7,8],delete_reader_study_groups_hook:7,delete_workstation_groups_hook:8,demo:4,denari:7,denot:3,depend:[1,6],deploi:[1,6],deploy:[1,4],describ:[4,5],descript:[2,3,5,7,8],descriptor:3,design:6,desktop:4,detail:[4,5,7],detect:4,determin:[0,5],dev:4,develop:[3,6],development_fixtur:4,dice:5,dicecoeffici:5,dicecoefficient_max:5,dicecoefficient_mean:5,dicecoefficient_min:5,dicecoefficient_std:5,dicom:[3,7],dict:[5,8],dictionari:5,diff:7,differ:[1,3,7,8],direct:[0,2,7],directli:3,directori:[0,2,4],disabl:4,discuss:3,displai:[5,7],display_all_metr:5,display_set:7,display_submission_com:5,displayset:7,distanc:[2,7],distribut:4,distro:4,divereg:3,django:[1,4,6],doc:[4,8],docker:[1,5,8],docstr:4,document:[1,3],doe:[0,4,5,7],doesnotexist:[2,5,7,8],down:4,download:[1,4,5],draft:[2,7],drop:[0,4],due:0,duplic:[5,7],durat:[2,7],durationfield:[7,8],durationqueryset:2,dure:3,e:[0,4,7],each:[0,3,4,5,7],earli:8,easier:4,easiest:4,edit:[4,7],editor:[4,7,8],editors_group:[7,8],educ:7,eg:[4,5],egrep:4,els:2,empti:[5,7],enabl:[0,4,7],encapsul:2,encod:[2,3],end:[2,8],engin:8,ensur:[0,4,8],enter:4,entiti:2,enumer:[2,3,5,7,8],env:4,environ:[4,8],environment:4,equival:[5,7,8],era:6,error:8,establish:1,etc:[5,8],evalu:[2,4,6,7],evaluation_extra:5,evalutil:4,ever:3,everi:[2,4,5,7],everyth:5,ex:4,exactli:7,exampl:[2,3,4,5,7],except:[2,4,5,7,8],execut:[1,4,5,6],exist:[4,5],exit:0,expect:[0,5],experi:0,experiment:7,expert:6,expir:8,expires_at:8,explan:7,explicitli:[0,4],expos:8,extens:4,extent:2,extern:4,extra:[2,3,5,7],extra_results_column:5,extract:5,f:0,fail:8,fals:[5,7],featur:[5,6],field:[0,2,3,4,5,7],file:[2,3,4,5,7],filefield:[2,8],filenam:5,filepath:4,filesystem:[0,4],find:[0,5,6],fix:2,fixtur:4,flag:4,flake8:4,floatfield:7,fly:4,folder:[4,5],follow:[4,7],force_insert:[5,7,8],force_upd:[5,7,8],foreignkei:[2,5,7,8],form:0,format:[0,2,4,7],formatt:4,forth:7,framework:4,free:5,frequent:6,from:[0,3,4,5,7,8],full:3,fulli:7,futur:3,g:[0,4,7],gather:6,gb:8,gc:4,gener:[1,3,4,7],genericrel:[5,7],get:[0,4,5,7,8],get_hanging_list_images_for_us:7,get_jsonpath:5,get_next_submiss:5,get_progress_for_us:7,getimagefromarrai:0,git:4,github:[2,4,6],given:[3,7],go:6,goessner:5,gpu:[0,1,8],gradientlength:2,grand:[0,1,2,3,4,5,7,8],grandchalleng:[2,4,5,7,8],grant:7,graph:2,grid:2,ground:6,ground_truth:7,group:[1,2,4,7,8],gt_fname:5,guarante:7,guid:[3,4],gunicorn:4,ha:[2,4,5,7,8],halt:4,handi:4,handl:[2,4,5,7],hang:6,hanging_image_nam:7,hanging_list:7,hanging_list_diff:7,hanging_list_imag:7,hanging_list_schema:7,hanging_list_valid:7,hanging_protocol:7,hangingprotocol:7,happen:8,hard:4,have:[0,2,3,4,5,6,7,8],head:7,heat:2,height:2,help:[3,4,5,7],help_text:7,help_text_markdown:7,here:[2,4,6,7],hide:[5,7],high:1,hint:2,histor:[7,8],histori:8,hook:[2,5,7],hope:3,horizont:1,host:8,hostnam:8,hour:0,how:[1,5,7],howev:3,html:[1,4,5],http:[2,4,5,7,8],http_port:8,hub:4,human:2,icon:4,id:[2,4,5,7,8],ie:5,im_denari:7,im_main:7,im_nonari:7,im_octonari:7,im_quaternari:7,im_quinari:7,im_secondari:7,im_senari:7,im_septenari:7,im_tertiari:7,imag:[2,4,5,6,7,8],image_fil:2,image_group:7,image_port:7,image_port_overlai:7,image_sha256:8,image_typ:3,imagefil:3,implement:2,inact:8,includ:[1,3,4,5,7],incomplet:5,incorrect:5,independ:1,index:[4,6],indic:8,individu:5,infer:5,inferencesess:0,info:7,inform:3,initi:8,initial_path:8,initialis:0,input:[2,4,6],input_fil:2,input_sitk_img:0,insert:[5,7,8],insid:0,insist:[5,7,8],inspect:4,instal:6,instanc:[0,1,5,6,7,8],instanti:1,instruct:4,integ:2,integr:4,intend:3,inter_op_num_thread:0,interact:[1,4,8],interfac:[0,1,2,5],interface_type_fil:2,interface_type_imag:2,interface_type_json:2,interfacekind:2,interfacekindchoic:2,interfacesuperkindchoic:2,interpret:4,intra_op_num_thread:0,invoc:4,invok:4,io:2,is_answer_valid:7,is_editor:7,is_educ:7,is_fully_edit:7,is_ground_truth:7,is_read:7,is_valid:7,issu:3,ital:3,item:7,its:[1,4,7],itself:4,jaccardcoeffici:5,jaccardcoefficient_max:5,jaccardcoefficient_mean:5,jaccardcoefficient_min:5,jaccardcoefficient_std:5,jinja:0,job:[0,2,5],jpeg:7,jpegfield:[7,8],jpg:[2,7],json:[2,4,5,7],jsonfield:[2,5,7,8],jsonpath:5,just:4,k:4,kei:5,kill:4,kind:[2,5],know:[7,8],kwarg:[2,5,7,8],label:5,languag:[4,6],larg:[3,6],last:[5,7],last_edit_dur:7,latest:4,latest_ready_imag:8,lauch:8,launch:[1,8],layer:[1,2],leaderboard:[5,7],learn:[1,6],left:5,legaci:2,legend:2,level:3,librari:[1,7],like:[3,4,7],limit:[3,4,5],line:[2,5,7],link:[4,5,7],linux:4,list:[0,4,6],lite:2,littl:0,load:[0,4,5,8],loadabl:5,localhost:4,locat:[0,2],lock:4,log:[0,5,8],logic:1,logo:[7,8],longer:5,loss:5,m:4,machin:6,made:[3,5,7],main:[4,7],major:2,make:[1,4,5,6,7,8],makemigr:4,manag:[1,4,6],mani:1,manual:[2,4,5],manytomanyfield:[5,7],map:[2,4,8],mark:[0,2],markdown:7,marker:4,maximum:8,maximum_dur:8,maxmium_dur:8,mean:[5,7],measur:[2,7],media:7,medic:[0,1,6],meet:3,memori:[0,1,8],messag:5,method:[2,5,7,8],metric:5,mha:[0,7],mhd:[5,7],microsoft:4,might:[0,3,7],migrat:6,minor:2,mlab4d4c4142:8,modal:[3,7],model:[1,2,3,4,5,7,8],model_fil:0,modif:7,modifi:[5,7,8],modul:[1,6],moment:3,monitor:[4,7],monolith:1,more:[2,3,4],most:[0,3,5,8],mount:[4,5],move:3,multilin:7,multipl:[2,7,8],multipleobjectsreturn:[2,5,7,8],multislic:3,must:[0,2,3,5,7,8],n:[4,7],name:[2,4,5,7],navig:[4,7,8],necessari:3,necessarili:1,need:[0,2,3,4,5,7,8],neg:2,net:5,network:0,next:5,node:1,non:[0,5,7,8],non_field_error:[2,5,7],non_unique_study_image_nam:7,nonari:7,none:[2,7,8],noqa:4,normal:[4,5,7,8],note:[1,4,5],now:4,num_work:0,number:[0,4,5,7],numpi:[4,7],numpy_arrai:0,nvidia:0,obj:5,object:[1,2,5,6,7,8],octonari:7,off:5,often:0,ok:4,onc:7,one:[0,3,4,5,7],ones:4,onetoonefield:[7,8],onli:[0,2,3,4,5,8],onnxruntim:0,open:[0,4,5],optimis:4,option:[4,7,8],order:[7,8],ordin:2,org:[0,1,2,3,4,5,7,8],organ:7,origin:0,other:7,otherwis:[7,8],otsu:4,our:[3,6],out:4,output:[2,6],output_sitk_img:0,over:[5,7],overal:[1,3,5],overlai:7,overrid:[5,7,8],overview:[1,7],own:[4,5,6],packag:4,page:[0,1,5,6,7],parallel:4,paramet:[2,5,7,8],pars:[0,5],part:[5,7],particip:[1,5,7],particular:[2,4,5,7,8],pass:[5,8],password:4,past:4,path:[2,4,5,8],path_point:2,path_point_list:2,pattern:7,pdf:[2,5],per:[1,5,7],percentag:7,perform:[5,7],period:5,permiss:[0,4,7],phase:5,ping:8,ping_tim:8,pip:4,pipelin:1,pk:7,place:[4,5],plain:4,platform:4,pleas:4,plugin:4,png:[2,7],poetri:4,point:2,polygon:2,port:[4,7,8],posit:2,positiveintegerfield:[5,8],positivesmallintegerfield:[5,7,8],possibl:[3,5],post:7,potenti:1,power:6,pr:6,practic:5,pre:4,predict:[2,5],present:7,press:4,previou:[3,5,7],privileg:0,problem:[1,6],process:[1,4,5,7,8],produc:[0,5,8],product:6,profession:4,program:4,project:4,projectfiledir:4,properli:0,properti:[0,2,7,8],protocol:7,provid:[0,1,5,6,7],proxi:8,publish:5,pull:4,px:7,py:4,pyproject:4,pytest:4,python3:4,python:[4,5,7],quantit:2,quaternari:7,queri:[2,3,5],queryset:2,question:6,question_text:7,queu:8,quinari:7,rais:[2,5,7,8],ran:2,randomst:7,rank:5,rather:[4,7,8],raw:7,re:[4,7,8],reach:8,read:[0,1,7],read_only_field:7,readabl:2,reader:[4,6],reader_studi:7,readers_group:7,readerstudi:[4,7],readerstudypermissionrequest:7,readi:8,readili:7,real:6,realli:4,reason:7,rebuilt:4,recent:8,recommend:[4,5],record:[2,7,8],rect:2,refer:[5,8],region:8,reject:7,rejection_text:7,rel:[2,8],relat:[1,7,8],relative_path:[0,2],relev:5,remain:[3,5],remot:4,remov:[4,7],remove_editor:7,remove_read:7,render:0,repeat:7,replac:4,repo:4,report:1,repositori:[4,6],repres:8,represent:3,request:[4,7],requir:[0,1,3,4,6,7,8],requires_cpu_cor:8,requires_gpu:8,requires_gpu_memory_gb:8,requires_memory_gb:8,research:[1,6],resid:5,resolut:[3,7],resolv:[0,4],respect:[5,7,8],respons:[5,8],rest:1,restart:4,restrict:3,result:[4,5],result_display_choic:5,reus:4,review:[4,7],right:4,rm:4,robust:6,role:1,roll:7,roll_over_answers_for_n_cas:7,rollov:7,root:4,run:[0,5,6,8],runner:4,runscript:4,runserver_plu:4,runserverplu:4,s:[0,4,5,7],safe:3,same:4,satisfi:2,save:[2,4,5,7,8],save_without_historical_record:[7,8],scale:[1,3],scan:5,schedul:1,schema:[2,7],scienc:1,scientist:[1,6],score:[5,7],score_decimal_plac:5,score_default_sort:5,score_error_jsonpath:5,score_for_us:7,score_jsonpath:5,score_titl:5,scores_by_us:7,scoring_funct:7,scoring_method_choic:5,scoringfunct:7,script:[4,5],search:6,second:[4,5],secondari:7,section:[3,4],secur:[1,4],see:[2,4,5,8],seed:7,seed_point:2,segment:2,select:[0,4,7,8],self:[2,4,5,7],senari:7,sens:1,sent:7,sentenc:3,separ:[1,4],septenari:7,serializ:2,server:[4,8],servic:[1,4,8],sess_opt:0,session:[0,8],sessionopt:0,set:[0,3,4,5,7,8],setup:4,sever:[1,4],sh:4,sha256:8,shape:1,share:0,shell:4,should:[0,2,3,4,5,7,8],show:[5,7],show_supplementary_file_link:5,show_supplementary_url:5,shown:[0,5],shuffl:7,shuffle_hanging_list:7,side:7,sign:4,signal:[7,8],simpl:4,simpleitk:0,singl:[1,2,3,7],singular:5,slightli:7,slow:4,slug:[2,5,7,8],so:[0,3,4,5,8],social:7,social_imag:7,socket:[1,4],softwar:3,solut:[1,6],solv:0,some:[3,4],someon:7,sometim:0,sort:[4,5],sourc:[2,5,7,8],space:[0,3],special:[2,5,7],specif:4,specifi:0,spend:4,spin:6,sql:[5,7,8],sqreg:2,stack:4,standard:5,start:[2,4,7,8],state:6,statement:4,statist:7,statu:[7,8],std:5,stderr:[0,5],stdout:0,step:4,still:[4,7],stop:[4,8],store:[0,1,2,3,4,5,8],store_in_databas:2,str:8,string:[2,5,7],structur:[5,7],studi:[4,6],study_image_nam:7,style:4,sub_typ:2,subclass:[5,7,8],submiss:[1,2,5],submission_kind:5,submission_limit:5,submission_limit_period:5,submission_page_html:5,submissionkind:5,submissions_close_at:5,submissions_open_at:5,submit:[1,5],substitut:7,suffix:7,suit:4,summari:3,supplementari:5,supplementary_file_choic:5,supplementary_file_help_text:5,supplementary_file_label:5,supplementary_url_choic:5,supplementary_url_help_text:5,supplementary_url_label:5,support:[1,2,3,4,7],sure:[4,7,8],sync:4,syntax:5,system:[0,4,5,6],t4:0,tab:[4,5],tag:6,tar:[4,8],target:[2,5,7],target_act:[5,7],task:[1,4],task_kwarg:8,team:[3,4],teams_test:4,technolog:1,templat:[0,4,6],templatetag:5,termin:[4,8],tertiari:7,test:[2,6,7],text:[0,2,3,5,7],textfield:[2,5,7,8],than:[3,4,7,8],thei:[0,4,5,7,8],them:[3,4,6,7],therebi:3,therefor:3,thi:[0,1,2,3,4,5,7,8],those:[1,7],though:[4,7],thread:0,thumbnail:2,tickband:2,tif:[0,7],tiff:7,time:[1,4,5,8],titl:[2,5,7,8],togeth:4,token:8,toml:4,tool:[4,7],top:4,total:7,total_edit_dur:7,track:8,train:[1,6],truth:6,turn:5,two:[0,3,5,7],type:[0,2,3,7,8],typic:3,u:4,ubiquit:6,ubuntu:4,uncheck:5,under:4,understand:4,uniqu:[7,8],unix:4,unpin:4,up:[4,6,8],updat:[0,4,5,7,8],update_statu:8,upload:[1,4,5,7,8],upon:3,url:[5,7,8],us:[0,1,2,3,4,5,6,7,8],usag:[1,7,8],use_display_set:7,user:[4,5,7,8],user_finish:8,user_upload:8,usernam:4,users_group:8,userupload:8,usual:4,util:4,uuidfield:[5,7,8],v5:2,v:4,val:0,valid:[2,5,6,7],validate_against_schema:2,validate_hanging_list:7,validationerror:[2,5,7],valu:[0,2,3,5,7,8],variabl:[4,8],vega:2,verifi:[5,7],version:[2,4,7,8],vertic:2,via:0,view:[1,7,8],view_cont:7,viewer:8,virtual:4,visibl:[5,7],visual:4,visualis:[1,2],volum:5,voxel:0,wall:0,want:[1,3,4,5,7,8],warn:[0,4],we:[2,3,4,5,7,8],web:[1,4],websocket:8,websocket_port:8,well:[1,7],were:3,werkzeug:4,what:[2,5,6,7,8],whatev:4,wheel:4,when:[0,4,5,7,8],whenev:0,where:[2,7],wherea:7,which:[0,1,3,4,5,7,8],white:2,who:[1,3,4,7,8],wide:[2,5,7],width:2,window:4,with_dur:2,within:[3,4,5],without:[0,7,8],work:[0,4,7],worker:5,workstat:[4,6,7],workstation_config:7,workstation_imag:8,workstation_url:8,workstationconfig:[7,8],workstationimag:8,workstations_maximum_sess:8,world:6,would:[4,7],wrap:4,writabl:0,write:[3,4],written:[0,3],wsl2:4,wsl:4,x:2,xarg:4,xz:8,y:2,year:5,yml:4,you:[0,4,5,6,7,8],your:[0,4,5,6,7],zero:0,zip:[2,5],zraw:7},titles:["Algorithms","Architecture","Components","Design decisions","Development","Evaluation","Welcome to grand-challenge.org\u2019s documentation!","Reader Studies","Workstations"],titleterms:{"case":7,"new":4,The:4,ad:[4,7],algorithm:[0,1],an:0,api:1,ar:0,architectur:1,ask:0,avail:0,build:4,can:0,challeng:6,compon:[1,2],compos:4,configur:4,contain:[1,5],content:6,context:1,creat:[4,7],data:0,databas:3,decis:3,defin:7,definit:3,depend:4,design:3,develop:4,docker:4,document:[4,6],entrypoint:5,error:[0,5],evalu:[1,5],exceed:0,execut:0,fail:0,file:0,frequent:0,go:4,grand:6,ground:7,hang:7,i:0,imag:[0,1,3],incorrectli:0,indic:6,input:[0,5],instal:4,json:0,languag:1,limit:0,list:7,local:4,migrat:4,object:3,onnx:0,option:5,org:6,output:[0,5],overlai:0,place:0,product:4,pthread_setaffinity_np:0,pycharm:4,pytorch:0,question:[0,7],reader:7,requir:5,resourc:0,result:0,run:4,runtim:0,s:6,site:4,studi:7,system:1,tabl:6,tag:5,templat:5,test:4,through:4,time:0,truth:7,ubiquit:1,user:1,visibl:0,welcom:6,what:0,where:0,worker:1,workstat:[1,8],write:0}})
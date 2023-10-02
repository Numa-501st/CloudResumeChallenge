var viewerCount = 0; // Initialize viewer count

var loading = setInterval(function() {
   var initDot = document.getElementById("loading");
   if (initDot && initDot.innerHTML.length == 5) {
       initDot.innerHTML = "";
   } else if (initDot) {
       initDot.innerHTML += ".";
   }
}, 350); // Dot Speed

var $loadingMessage = $('#loadingH1');

setTimeout(function() {
    clearInterval(loading);
    $loadingMessage.hide();
    updateViewerCount(); // Increment viewer count when loading is complete
}, 1500);
  
   var initProgram = setTimeout(function(){
       var greeting = "UNIDENTIFIED SENTIENT LIFEFORM DETECTED";
       var message = "RUNNING CLOUD RESUME CHALLENGE FOR USER...";
       var $identityDiv = $("#identity-results");
       var $name = "NAME: NUMA ISA";
       var $alias = "KNOWN ALIAS: NUMA501st"
       var $occupation  = "OCCUPATION: DEVOPS ENGINEER | CLOUD ENGINEER | SOLUTIONS ARCHITECT";
       var $DevOpsSkills  = "DEVOPS ENGINEER: CI/CD PIPELINES | LINUX ADMINISTRATION | CONTAINERISATION | BASH SCRIPTING";
         var $CICDPipe = "CI/CD PIPELINE TOOLS: GIT | JENKINS | GRADLE | PROMETHEUS & GRAFANA";
         var $AZPipe = "AZURE PIPELINES EXPERIENCE: AZURE DEVOPS PIPELINES PROJECTS";
         var $Plangs = "BASH SCRIPTING: LINUX ADMIN EXPERIENCE | PYTHON INTERMEDIATE";
         var $IAC = "INFRASTRCUTRE AS CODE: TERRAFORM | CLOUDFORMATION";
         var $Containerisation = "CONTAINERISATION: DOCKER | KUBERNETES";
       var $AWSEngineer = "CLOUD ENGINEER: CERTICATIONS | PROGRAMMES | QUALIFICATIONS";
         var $certifications = "AWS CERTIFIED: (SAA-003 & CLF-001) | AWS RE/START GRADUATE | AZURE CERTIFIED (AZ-900) | GCP QUALIFIED";
       var $Architecture = "SOLUTIONS ARCHITECT: CLOUD MIGRATION | NETWORK TOPOLOGIES";
         var $NetSkills = "NETWORKING: SETUP AND LOAD BALANCING";
         var $SolutionsArchExp = "PUBLIC CLOUD SOLUTIONS: 1 YEAR DESIGNING AND DEPLOYING CLOUD SOLUTIONS FOR CLIENT NEEDS";
         var $Collabskills = "COLLABORATION: AGILE WORK ENVIRONMENT | WELL-ARCHITECTED FRAMEWORK ADHERANCE";
        
      function initCollabskills(i){
            $('#collab-skills').addClass("sign cursor").text($Collabskills.substring(0, i));
            if(i < $Collabskills.length){
                setTimeout(function(){
                    initCollabskills(i + 1);  
                }, 35);
            } else {
                //$('#collab-skills').removeClass("cursor");
                updateViewerCount(); // Increment viewer count when animation is complete
            }
        }   
       
         
      function initIdentityResults(i){
          $("#message").addClass("sign cursor").text(message.substring(0, i));
            if(i < message.length){
                setTimeout(function(){
                    initIdentityResults(i + 1);
                }, 35);   
            }else{
               $('#message').removeClass("cursor");
               var loadingResume = function(){
                     $("#loadingMessage2").show()
                     var dotAlpha = document.getElementById("alpha-loading");
                     var loadingAlpha = setInterval(function() {
                      if(dotAlpha.innerHTML.length == 6) {
                          dotAlpha.innerHTML = "";
                      } else {
                          dotAlpha.innerHTML += ".";
                          setTimeout(function() {
                              clearInterval(loadingAlpha);
                              $("#loadingMessage2").hide();
                           }, 2000);
                      }
                  }, 350);  // Dot Speed
               }
               loadingResume();
               function initName(i){
                  $("#name").addClass("sign cursor").text($name.substring(0, i));
                     if(i < $name.length){
                        setTimeout(function(){
                           initName(i + 1);   
                        }, 35);
                     }else{
                        $("#name").removeClass("cursor");
                        setTimeout(function() {
                           initAlias(0);
                        }, 1500);      
                     }
               }
               setTimeout(function() {
                  initName(0);
               }, 2500);
            }
            function initAlias(i){
                  $("#alias").addClass("sign cursor").text($alias.substring(0, i));
                     if(i < $alias.length){
                        setTimeout(function(){
                           initAlias(i + 1);   
                        }, 35);
                     }else{
                        $("#alias").removeClass("cursor");
                        setTimeout(function() {
                           initOccupation(0);
                        }, 1500);
                     }
            }
            function initOccupation(i){
               $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                     if(i < $occupation.length){
                        setTimeout(function(){
                           initOccupation(i + 1);   
                        }, 35);
                     }else{
                        $("#occupation").removeClass("cursor");
                        setTimeout(function() {
                           initDevOpsSkills(0);
                        }, 1500);
                     }
            }
            function initDevOpsSkills(i){
               $('#devops-span').addClass('fa fa-wrench');
               $('#dev-ops').addClass("cursor").text($DevOpsSkills.substring(0, i));
                  if(i < $DevOpsSkills.length){
                     setTimeout(function(){
                        initDevOpsSkills(i + 1);  
                     }, 35);
                  }else{
                     $('#dev-ops').removeClass("cursor");
                        setTimeout(function() {
                           initCICDPipe(0);
                        }, 1500);
                  }
            }
            function initCICDPipe(i){
               $('#cicd-pipe').addClass("sign cursor").text($CICDPipe.substring(0, i));
                  if(i < $CICDPipe.length){
                     setTimeout(function(){
                         initCICDPipe(i + 1);  
                     }, 35);
                  }else{
                     $('#cicd-pipe').removeClass("cursor");
                        setTimeout(function() {
                           initAZPipe(0);
                        }, 1500);
                  }
            }
            function initAZPipe(i){
               $('#azure-pipe').addClass("sign cursor").text($AZPipe.substring(0, i));
                  if(i < $AZPipe.length){
                     setTimeout(function(){
                         initAZPipe(i + 1);  
                     }, 35);
                  }else{
                     $('#azure-pipe').removeClass("cursor");
                        setTimeout(function() {
                           initPlangs(0);
                        }, 1500);
                  }
            }
            function initPlangs(i){
               $('#prog-lang').addClass("sign cursor").text($Plangs.substring(0, i));
                  if(i < $Plangs.length){
                     setTimeout(function(){
                         initPlangs(i + 1);  
                     }, 35);
                  }else{
                     $('#prog-lang').removeClass("cursor");
                     setTimeout(function() {
                           initIAC(0);
                        }, 1500);
                  }
            }
             function initIAC(i){
               $('#infra-as-code').addClass("sign cursor").text($IAC.substring(0, i));
                  if(i < $IAC.length){
                     setTimeout(function(){
                         initIAC(i + 1);  
                     }, 35);
                  }else{
                     $('#infra-as-code').removeClass("cursor");
                     setTimeout(function() {
                           initContainerisation(0);
                        }, 1500);
                  }
            }
            function initContainerisation(i){
               $('#containerisation').addClass("sign cursor").text($Containerisation.substring(0, i));
                  if(i < $Containerisation.length){
                     setTimeout(function(){
                         initContainerisation(i + 1);  
                     }, 35);
                  }else{
                     $('#containerisation').removeClass("cursor");
                     setTimeout(function() {
                           initAWSEngineer(0);
                        }, 1500);
                  }
            }
            function initAWSEngineer(i){
               $('#awsengineer-span').addClass("fa fa-wordpress")
               $('#AWS-engineer').addClass("cursor").text($AWSEngineer.substring(0, i));
                  if(i < $AWSEngineer.length){
                     setTimeout(function(){
                         initAWSEngineer(i + 1);  
                     }, 35);
                  }else{
                     $('#AWS-engineer').removeClass("cursor");
                     setTimeout(function() {
                           initcertifications(0);
                        }, 1500);
                  }
            }
            function initcertifications(i){
               $('#certs').addClass("sign cursor").text($certifications.substring(0, i));
                  if(i < $certifications.length){
                     setTimeout(function(){
                         initcertifications(i + 1);  
                     }, 35);
                  }else{
                     $('#certs').removeClass("cursor");
                     setTimeout(function() {
                           initArchitecture(0);
                        }, 1500);
                  }
            }
             function initArchitecture(i){
               $('#architecture-span').addClass('fa fa-paint-brush');
               $('#architecture').addClass("cursor").text($Architecture.substring(0, i));
                  if(i < $Architecture.length){
                     setTimeout(function(){
                         initArchitecture(i + 1);  
                     }, 35);
                  }else{
                     $('#architecture').removeClass("cursor");
                     setTimeout(function() {
                           initNetSkills(0);
                        }, 1500);
                  }
            }
            function initNetSkills(i){
               $('#net-skills').addClass("sign cursor").text($NetSkills.substring(0, i));
                  if(i < $NetSkills.length){
                     setTimeout(function(){
                         initNetSkills(i + 1);  
                     }, 35);
                  }else{
                     $('#net-skills').removeClass("cursor");
                     setTimeout(function() {
                           initSolutionsArchExp(0);
                        }, 1500);
                  }
            }
            function initSolutionsArchExp(i){
               $('#solarchexp').addClass("sign cursor").text($SolutionsArchExp.substring(0, i));
                  if(i < $SolutionsArchExp.length){
                     setTimeout(function(){
                         initSolutionsArchExp(i + 1);  
                     }, 35);
                  }else{
                     $('#solarchexp').removeClass("cursor");
                     setTimeout(function() {
                           initCollabskills(0);
                        }, 1500);
                  }
            }
            function initCollabskills(i){
               $('#collab-skills').addClass("sign cursor").text($Collabskills.substring(0, i));
                  if(i < $Collabskills.length){
                     setTimeout(function(){
                         initCollabskills(i + 1);  
                     }, 35);
                  }else{
                     //$('#collab-skills').removeClass("cursor");
                  }
            }
         }
         
      function initProgramAlpha(i){
          $("#greeting").addClass("cursor").text(greeting.substring(0, i));
            if(i < greeting.length){
                setTimeout(function(){
                    initProgramAlpha(i + 1);
                }, 35);   
            }else{
               $("#greeting").removeClass("cursor");
               initIdentityResults(0);
            }
         }
         initProgramAlpha(0)
   
   }, 1500);

initProgram();

function updateViewerCount() {
   fetch('x')
       .then(response => response.text())  // Parse response as text
       .then(data => {
           viewerCount = parseInt(data);  // Converts the response to an integer
           document.getElementById('count').textContent = viewerCount;
       })
       .catch(error => console.error('Error:', error));
}





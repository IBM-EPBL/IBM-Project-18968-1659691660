# IBM-Project-18968-1659691660
## *Digital Naturalist - AI Enabled tool for Biodiversity Researchers*

##Demo:
```md
[![Watch the video](https://img.youtube.com/vi/2h0_EjLAMC4/default.jpg)](https://youtu.be/2h0_EjLAMC4)
```

## Project Overview
In this project, we are creating a web application which uses a deep learning model, trained on different species of birds, flowers and mammals (2 subclasses in each for a quick understanding) and get the prediction of the bird when an image is been given.
The existing solution is quite simple and suits certain constraints whereas we need to find alternatives to retrieve a more comprehensive range of information. The identification algorithm is fit in a mobile app which makes it platform independent. The web version of the mobile app is linked with the database portal with which a researcher can access the data. This app is architected to withstand high volumes of traffic. The capability of the app to find various flora and fauna is improvised. The identification database can be updated easily.

## Purpose
A naturalist is someone who studies the patterns of nature, identifies a different kind of flora and fauna in nature.Being able to identify the flora and fauna around us often leads to an interest in protecting wild spaces, and collecting and sharing information about the species we see on our travels is very useful for conservation groups like NCC.

When venturing into the woods, field naturalists usually rely on common approaches like always carrying a guidebook around everywhere or seeking help from experienced ornithologists. There should be a handy tool for them to capture, identify and share the beauty to the outside world. 

Field naturalists can only use this web app from anywhere to identify the birds, flowers, mammals and other species they see on their hikes, canoe trips and other excursions.

In this project, we are creating a web application which uses a deep learning model, trained on different species of birds, flowers and mammals (2 subclasses in each for a quick understanding)and get the prediction of the bird when an image is been given.

## Existing Solution
Existing solution for the problem is available in the form of internet options like google lens and apple lens. These tools however are not designed for the particular purpose of finding and distinguishing the flora and fauna. With so many objects for them to detect and identify, the existing solutions are not optimised to perform a single task, thereby reducing the accuracy of the detection and identification. 

## References
1) Ungulate Detection and Species Classification from Camera Trap Images Using RetinaNet and Faster R-CNN (2022)
Published: 09 February 2022
Link: https://www.researchgate.net/publication/358939019_Ungulate_Detection_and_Species_Classification_from_Camera_Trap_Images_Using_RetinaNet_and_Faster_R-CNN
Points we take: Incorporating machine learning into ecological workflows could improve inputs for ecological models and lead to integrated hybrid modelling tools.
Methodology: Convolutional Neural Network (CNN),Tensorflow Framework, Back Propagation

2)  “Image Classification Using Deep Neural Network”. Tiwari, Vaibhav, Chandrasen Pandey, Ankita Dwivedi, and Vrinda Yadav.In 2020 2nd International Conference on Advances in Computing, Communication Control and Networking (ICACCCN), pp. 730- 733. IEEE, 2020.
Published: 2020
Authors   :Tiwari, Vaibhav, Chandrasen Pandey, Ankita Dwivedi, and Vrinda Yadav
Link: https://www.semanticscholar.org/paper/Image-Classification-Using-Deep-Neural-Network-Tiwari-Pandey/61cbf797a48abe2864d9ba6f852a5988f46e7abe
Points we take: The recognition can be performed using images of different organs of the plant,flower in a real-time application. We get some inspiration from their experience of that application.
Methodologies: Deep Neural Network, VGG, Image Classification, CNN

3)  “Rare Animal Image Recognition Based on Convolutional Neural Networks” .Hao, Xinyu, Guangsong Yang, Qiubo Ye, and Donghai Lin. In 2019 12th International Congress on Image and Signal Processing, BioMedical Engineering and Informatics (CISP-BMEI), pp. 1-5. IEEE, 2019.
Published: 2019
Link: https://ieeexplore.ieee.org/document/8965748
Points we take:  Avoiding the cumbersome process of manual preprocessing for the target image, and can directly input the original image for recognition, which is more feasible than the traditional image recognition algorithm.
Methodology: Convolutional Neural Network (CNN),Matrix Multiple CNN (MMCNN)

## Problem Statement Definition
When venturing into the woods, field naturalists usually rely on common approaches like always carrying a guidebook around everywhere or seeking help from experienced ornithologists. There should be a handy tool for them to capture, identify and share the beauty to the outside world. Field naturalists can only use this web app from anywhere to identify the birds, flowers, mammals and other species they see on their hikes, canoe trips and other excursions. In this project, we are creating a web application which uses a deep learning model, trained on different species of birds, flowers and mammals (2 subclasses in each for a quick understanding)and get the prediction of the bird when an image is been given.

## Ideation and brainstorming
 We have brainstormed with our group for this project and contracted to three top ideas those are:

1.) We are going to specifically concentrate on the variety of animals and plants data it would be more useful for research and educational purpose where they can particularly set what kind of information the user wants,our application displays scientific names of the plants and animals where user can switch from Latina names to common names for better understanding. 
          
2.) Our application is also capable of identify animals by their footprints and skin sheds, identify plants by their leaves and flowers because every flora and fauna have a unique pattern which make us easy to identify.


3.) The unidentified creatures , plants or their patterns can be separately noted in our application so that it can be researched thoroughly afterwards,user can suggest their discoveries to us which will be verified and updated in our application.

## Proposed Solution
* The existing solution is quite simple and suits certain constraints whereas we need to find alternatives to retrieve a more comprehensive range of information.

* The identification algorithm is fit in a mobile app which makes it platform independent.

* The web version of the mobile app is linked with the database portal with which a researcher can access the data. 

* This app is architected to withstand high volumes of traffic.

* The capability of the app to find various flora and fauna is improvised.

* The identification database can be updated easily.

## Business Model
* The web app is billed with a subscription model. 

* There will be two subscription models, One is a basic plan and another one is an admin plan.

* The Basic plan allows the researchers to access only the flora and fauna recognition capabilities.

* The admin plan allows the researcher to access the database regarding the various scans they have performed. 

* This model makes sure that a large amount of the customer base is covered which might include students, teachers, and researchers. 

## Scalability
* This app is architected to withstand high volumes of traffic.

* The variation in the subscription model scales the app for a wider audience.

* The capability of the app to find various flora and fauna can be improvised. 

* The identification database can be updated easily

## Functional Requirement

The main need for functional requirement is to have functionalities for the input and output classification. The major functional requirement for our project are:

* **Administrative functions**

The main need for administrative functions is to divide the CRUD operations based on the users using the application. This helps to differentiate who has which CRUD operation available to use for them and also defines the ability to access database for different users.

* **Authentication**

Authentication is used by a server when the server needs to know exactly who is accessing their information or site. Authentication is used by a client when the client needs to know that the server is system it claims to be. This helps us to monitor who uses the application and helps us to maintain the security and authenticity of the application that the user is using. This also helps the users to manage all the species that they have scanned.

* **Authorization levels**

The owner has full access rights to the access the user data and can grant other people the right to access it. You say that the owner authorizes people to access it. This simple example allows us to introduce a few concepts in the authorization context. A permission becomes a privilege (or right) when it is assigned to someone. So, if you assign permission to access to edit the database, you are granting them that privilege.

* **Audit Tracking**

Audit Tracking helps to track who has scanned what, saved which image and track the users activity in the application and save the details in the cloud as a log for that particular user. It is just simply to track malicious activity and ensure the safety of the users. 

## Non Functional Requirement

* **Input Device**

The Input device required for the app to run is a smartphone or a tab with minimum 4GB RAM, 64bit octa core processor with a minimum of 8mp back camera. The device should also have a stable internet connection facility that can support upto 4G Internet Connectivity.

## Advantages and Disadvantages
* Our projects helps many researchers and students to understand more about flora and fauna 
* It recognise what type of animals from its foot tracks and plants from its leaves structure
* Researchers can take notes on new behavouir on the spot in software and can analyse it afterwards for research purpose
* It will also display the scientific names of the flora and fauna

* The app requires an internet connectivity to run which can curb the access in remote areas
* The input device requirement is expensive since cameras with decent quality is required for image classification.
* The app cannot detect species that can camouflage with the environment.


##  Conclusion
The app, made with flask and django uses convolutional neural network (CNN) is trained with predefined dataset and the output is displayed and the app is deployed in IBM Cloud. When the field scientist takes a picture of a flora or fauna using their input device, that image is processed against the trained model and the species are identified. The solution is platform independent, meaning that it can be accessed with any device that satisfies the minimum hardware requirement and can be accessed anywhere with just an input device and internet connection. The modularity of the app enables the developer to include additional features in the future such as fossil detection, route analysis and many more.

## Future Scope

* We can update the model to recognise fossils also through this app

* It can show us which species are endagered white their known count

* It will able recognise animals through their sounds 

* In future we can devolope this app where we it can show the numbers of endagered species and their count

* which can bring awareness to the users to protect these animals we can also develope this software as such it can recognise the animals from their sounds and displays the users which animal it is

* they can also keep track on the research animals and their behavouir through this app which is helpful to the researchers to analyse their habits  

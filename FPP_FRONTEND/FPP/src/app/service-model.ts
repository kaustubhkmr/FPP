import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ServiceModelData{
    public value:any=[
        {
            'id':0,
            'name':'Driver',
            'icon':'taxi-driver.png',
            'message':`Trained Drivers at an affordable pricing of
            ₹99/Hr. At your doorstep in 30mins. 24/7 Services. Pre-Screened Drivers.
            Pay For What You Use.`,
            'price':`99`,
            'pricetag':'Rs.99/hr'
        },
        {
            'id':1,
            'name':'Mechanic',
            'icon':'mechanic.png',
            'message':`Get Roadside Assistance & other Garage
            Service at ZERO Subscription All Vehicles. Available 24X7.
            Get Mechanic is 20 Mins. Best Roadside Assistance.`
            ,
            'price':`99`,
            'pricetag':'Rs.99/hr'
        },
        {
            'id':2,
            'name':'Hair Dresser',
            'icon':'hairdresser.png',
            'message':`Trained Drivers at an affordable pricing of
            ₹99/Hr. At your doorstep in 30mins. 24/7 Services.
            Pay For What You Use.`
            ,
            'price':`99`,
            'pricetag':'Rs.99/hr'
        },
        {
            'id':3,
            'name':'Gardener',
            'icon':'gardener.png',
            'message':`Our gardening services include the following features:
            Pruning of shrubs, bushes and trees.Maintenance of lawns, flowerbeds,
            shrubbery, trees and greenery. All this at an affordable price of Rs.99/hr`
            ,
            'price':`99`,
            'pricetag':'Rs.99/hr'
        },
        {
            'id':4,
            'name':'Electrician',
            'icon':'electrician.png',
            'message':`Get Star-Rated Electricians Near You
            within 2 hours for services at best prices. Fix all kinds of faults in Rs. 500 under special offer`
            ,
            'price':`99`,
            'pricetag':'Rs.99/hr'
        },
        {
            'id':5,
            'name':'Doctor',
            'icon':'doctor.png',
            'message':`All our doctors are highly professional with years
            medical experience. We aim to provide you an easy and hassle-free
            consultation at home at your doorstep. At an affordable consulting fee of Rs. 200 per consulatation.`
            ,
            'price':`99`,
            'pricetag':'Rs.99/hr'
        },
        // {
        //     'id':6,
        //     'name':'Chemist',
        //     'icon':'chemist.png',
        //     'message':`Pharmaceutical Ordering and Support for
        //     Pharmacies and Health Systems.`
        //     ,
        //     'price':`99`,
        //     'pricetag':'Rs.99/hr'
        // },
        {
            'id':7,
            'name':'Carpenter',
            'icon':'carpenter.png',
            'message':`Get Star-Rated Carpenters Near You within 2
            hours for services at best prices.`
            ,
            'price':`99`,
            'pricetag':'Rs.99/hr'
        },
        // {
        //     'id':8,
        //     'name':'Builder',
        //     'icon':'builder.png',
        //     'message':`You will find many links to help you with your construction/remodeling
        //     projects.`
        // },
        {
            'id':9,
            'name':'Gym',
            'icon':'athlete.png',
            'message':`Successfully delivered a complete fitness lifestyle to our members. Subscribe at Rs.1000/month under special offer`
        }
    ]
}
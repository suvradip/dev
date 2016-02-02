/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @meta package_map_pack
 @id fusionmaps.Monofiya.18.08-09-2012 04:41:19
*/
FusionCharts(["private","modules.renderer.js-monofiya",function(){var f=this,b=f.hcLib,c=b.chartAPI,h=b.moduleCmdQueue,b=b.injectModuleDependency,a=!!c.geo,e,g,d;e=[{name:"Monofiya",revision:18,creditLabel:!1,standaloneInit:!0,baseWidth:838,baseHeight:528,baseScaleFactor:10,entities:{"01":{outlines:[["M",5931,366,"Q",5929,384,5923,393,5914,406,5913,437,5896,427,5884,449,5873,471,5863,465,5853,458,5852,453,5850,444,5846,435,5835,427,5831,413,5830,413,5802,414,5793,415,5793,403,5793,394,5799,394,5804,
393,5804,388,5804,369,5790,370,5757,371,5756,371,5750,364,5750,348,5759,332,5759,311,5761,279,5767,276,"L",5767,257,"Q",5771,256,5784,252,"L",5784,243,"Q",5781,236,5721,236,5715,236,5715,258,5716,281,5694,281,5697,288,5693,294,5688,300,5685,305,5687,321,5683,324,5682,325,5670,325,5660,325,5654,319,5649,314,5629,314,"L",5629,300,"Q",5633,298,5639,279,5641,274,5649,271,5657,267,5660,263,5669,248,5690,220,"L",5690,205,"Q",5669,196,5670,174,5665,174,5603,169,5604,153,5604,145,5605,130,5591,125,5586,122,
5582,107,5574,99,5574,87,5555,89,5552,68,"L",5525,68,"Q",5525,71,5524,77,5495,74,5485,75,5477,76,5476,80,5474,84,5467,84,5462,84,5449,71,5437,58,5437,53,5429,41,5410,42,"L",5373,42,"Q",5373,38,5372,35,"L",5347,35,5347,26,5336,26,5336,52,"Q",5328,50,5325,56,5321,64,5303,64,"L",5244,64,5243,74,5231,74,5231,87,"Q",5232,87,5232,89,"L",5246,89,5246,110,"Q",5244,113,5244,115,"L",5226,115,"Q",5226,118,5225,126,"L",5142,126,"Q",5148,138,5138,140,"L",5121,140,5121,146,5069,146,"Q",5069,136,5058,135,5057,128,
5057,125,"L",5027,125,"Q",5023,131,5019,135,5011,132,5006,140,5001,148,4992,147,4982,146,4974,151,4966,156,4958,155,4943,154,4890,167,"L",4890,173,"Q",4921,173,4924,185,4938,185,4968,188,5001,185,5003,200,5004,207,5003,223,5004,237,5015,240,"L",5015,264,4952,264,"Q",4898,262,4894,267,"L",4894,273,4899,273,"Q",4899,286,4911,299,"L",4911,315,"Q",4900,313,4893,313,4879,314,4877,323,"L",4851,323,"Q",4853,312,4836,311,4816,313,4807,312,4806,311,4805,311,4773,312,4763,323,"L",4742,323,"Q",4741,320,4741,
310,4734,314,4729,300,"L",4742,300,4742,272,"Q",4741,269,4741,261,4731,264,4730,258,4729,257,4729,244,"L",4710,243,"Q",4711,233,4710,229,4709,222,4700,225,"L",4700,210,"Q",4716,201,4713,196,"L",4724,196,4724,182,4647,182,4647,174,4627,174,4627,167,4604,167,"Q",4604,171,4603,174,4593,173,4589,173,"L",4589,198,"Q",4590,198,4599,204,"L",4599,245,"Q",4563,240,4562,252,"L",4562,295,"Q",4562,296,4571,303,"L",4571,322,4544,322,4544,302,4529,302,"Q",4526,308,4526,320,"L",4482,320,"Q",4482,310,4481,306,"L",
4470,306,"Q",4472,297,4461,293,4450,290,4454,279,"L",4411,279,4411,267,4382,267,"Q",4379,270,4379,275,"L",4368,275,4368,287,4361,287,"Q",4360,276,4360,271,4346,271,4346,255,4349,238,4349,235,4347,224,4348,215,4350,198,4367,196,"L",4367,177,"Q",4355,177,4356,167,"L",4340,167,"Q",4340,167,4338,167,"L",4337,177,4307,177,"Q",4306,169,4306,167,"L",4297,167,"Q",4294,169,4293,176,"L",4271,176,"Q",4271,211,4268,264,4268,269,4274,275,"L",4274,288,4258,288,4258,317,4251,317,"Q",4254,328,4247,332,"L",4178,332,
4178,322,4142,322,4141,339,"Q",4141,341,4144,344,4148,348,4151,347,"L",4151,361,4141,361,"Q",4141,366,4140,379,"L",4141,414,"Q",4114,414,4106,413,4105,422,4103,446,4067,446,4049,444,"L",4049,455,"Q",4055,464,4067,479,4067,485,4040,509,4045,512,4046,517,4057,517,4085,542,4094,550,4102,560,4112,566,4127,572,4129,575,4148,589,4162,598,4163,610,4164,631,4168,639,4172,647,4172,664,4172,688,4169,694,4163,710,4158,731,4156,741,4134,794,4133,806,4092,845,4091,858,4073,872,4073,882,4068,888,4062,894,4063,
902,"L",4062,917,"Q",4046,912,4043,940,4042,945,4036,949,4029,954,4027,963,4020,963,4020,969,4020,987,4061,1028,4071,1039,4073,1067,4073,1081,4091,1097,4095,1107,4107,1126,4106,1140,4122,1159,4127,1165,4135,1190,4142,1213,4149,1220,"L",4149,1235,"Q",4153,1248,4171,1274,4185,1301,4180,1328,4175,1356,4190,1380,4214,1416,4217,1425,4235,1482,4263,1509,4276,1522,4316,1533,4348,1543,4357,1543,4374,1543,4381,1539,4388,1535,4409,1535,4432,1535,4441,1529,4451,1523,4455,1523,4463,1523,4473,1527,"L",4473,1585,
"Q",4456,1595,4435,1614,4416,1618,4411,1622,4404,1639,4397,1641,4386,1644,4378,1655,4369,1668,4362,1675,4342,1682,4338,1689,4332,1704,4320,1711,4311,1713,4298,1727,4282,1744,4272,1746,4272,1752,4276,1767,4278,1779,4270,1785,4262,1791,4263,1818,4263,1845,4265,1849,4267,1853,4269,1862,4271,1871,4275,1876,4283,1884,4286,1904,4288,1909,4299,1912,4308,1914,4307,1926,4317,1922,4321,1928,4327,1935,4333,1935,"L",4389,1935,"Q",4411,1935,4463,1931,4470,1931,4475,1923,4481,1915,4485,1915,4499,1915,4501,1914,
4505,1912,4505,1904,4509,1903,4522,1903,4531,1901,4529,1893,"L",4553,1893,"Q",4560,1908,4579,1905,4580,1910,4580,1916,4585,1917,4595,1920,4605,1924,4603,1934,4610,1941,4610,1949,4613,1953,4619,1956,4620,1957,4620,1967,"L",4619,1991,"Q",4616,1991,4610,2009,4605,2024,4589,2016,"L",4589,2025,4580,2025,"Q",4584,2037,4578,2043,4572,2050,4572,2057,4572,2059,4572,2060,4569,2079,4553,2114,4539,2112,4538,2123,4528,2122,4524,2122,4516,2123,4514,2134,"L",4506,2134,"Q",4508,2146,4498,2149,4486,2152,4481,2153,
4481,2164,4474,2166,"L",4473,2183,"Q",4473,2189,4473,2206,4472,2220,4462,2216,4461,2217,4460,2241,4450,2238,4450,2258,"L",4442,2258,"Q",4445,2268,4439,2272,4433,2278,4435,2285,4434,2287,4424,2295,4418,2301,4421,2312,"L",4409,2312,4409,2326,"Q",4430,2345,4442,2365,4447,2374,4446,2394,4452,2404,4457,2423,4459,2437,4470,2479,4471,2485,4477,2488,4483,2491,4482,2501,4480,2519,4489,2525,"L",4489,2558,"Q",4472,2558,4433,2566,4401,2572,4370,2569,"L",4370,2577,4360,2577,4360,2606,"Q",4354,2603,4350,2608,4347,
2612,4349,2618,"L",4344,2617,4343,2617,4311,2617,"Q",4291,2635,4225,2636,4158,2637,4145,2640,4132,2642,4098,2648,4064,2654,4040,2657,4016,2659,3990,2667,3963,2675,3938,2675,3879,2677,3791,2677,3731,2677,3685,2677,3661,2677,3637,2677,3610,2677,3582,2677,3561,2675,3543,2668,3512,2665,3488,2663,3464,2661,3439,2659,3414,2656,3392,2653,3370,2650,3357,2648,3216,2627,3041,2615,3018,2612,2997,2609,2976,2606,2957,2604,2936,2601,2916,2598,2890,2594,2868,2596,2845,2598,2824,2592,2803,2586,2781,2575,2759,2563,
2741,2557,2723,2550,2699,2542,2679,2536,2663,2522,2654,2517,2641,2512,2620,2503,2595,2492,2570,2481,2554,2473,2538,2466,2529,2461,2448,2413,2424,2404,2400,2395,2384,2393,2367,2391,2345,2372,2323,2363,2318,2361,"L",2294,2349,"Q",2224,2314,2187,2297,2141,2275,2072,2239,2045,2225,2005,2225,"L",1910,2225,"Q",1909,2233,1899,2235,1888,2237,1887,2240,1884,2247,1856,2247,1808,2247,1760,2207,1756,2204,1726,2188,1712,2181,1712,2157,1711,2103,1713,2075,1715,2046,1719,2038,1722,2030,1721,2007,1721,1983,1721,
1976,"L",1721,1884,"Q",1736,1872,1735,1831,1734,1792,1745,1787,"L",1745,1766,"Q",1739,1742,1720,1742,1691,1746,1668,1745,1526,1745,1523,1745,"L",1400,1745,"Q",1313,1746,1310,1748,1263,1759,1245,1765,1222,1772,1215,1780,1207,1791,1187,1802,1163,1832,1121,1913,1079,1994,1049,2033,"L",1048,2034,"Q",1044,2040,1011,2090,990,2122,967,2139,944,2156,918,2178,892,2200,860,2231,827,2262,758,2314,716,2356,710,2361,702,2369,683,2383,667,2397,663,2408,"L",650,2408,"Q",626,2382,622,2380,616,2377,610,2365,605,2354,
597,2354,595,2352,552,2295,535,2295,503,2358,490,2387,454,2429,428,2478,355,2576,342,2608,333,2617,323,2626,317,2636,311,2646,304,2658,296,2669,288,2683,269,2709,233,2768,196,2824,186,2840,176,2856,168,2870,160,2884,158,2889,156,2894,125,2938,114,2962,73,3016,54,3049,51,3053,48,3056,38,3070,29,3083,23,3095,39,3122,95,3170,114,3193,141,3217,147,3221,159,3237,171,3251,181,3253,241,3316,266,3330,290,3344,330,3364,371,3385,389,3397,407,3408,483,3449,559,3489,631,3533,771,3618,795,3631,819,3644,848,3655,
877,3667,933,3682,954,3694,955,3694,1011,3710,1079,3740,1106,3749,1183,3780,1219,3793,1229,3798,1229,3799,1283,3815,1339,3831,1376,3848,1421,3869,1457,3879,1505,3890,1567,3924,1575,3929,1598,3933,1623,3937,1634,3942,1646,3947,1703,3978,1735,3996,1755,4E3,1770,4003,1787,4016,1820,4040,1871,4061,1915,4081,1987,4114,2019,4128,2084,4163,"L",2084,4163,"Q",2106,4177,2145,4200,2150,4203,2165,4202,2171,4204,2180,4214,2195,4217,2213,4229,2225,4232,2248,4243,2274,4255,2281,4263,2294,4279,2344,4296,2345,4297,
2364,4310,2382,4323,2391,4328,2400,4332,2412,4336,2424,4340,2434,4349,2432,4355,2457,4361,2463,4363,2492,4379,2531,4399,2622,4444,"L",2638,4436,"Q",2646,4437,2661,4430,2674,4430,2689,4418,2709,4418,2714,4412,2722,4399,2732,4398,2747,4397,2758,4391,2770,4384,2786,4383,2788,4383,2831,4370,2835,4369,2838,4362,2840,4355,2847,4355,2858,4355,2873,4349,2897,4340,2915,4335,2919,4334,2934,4324,2947,4316,2960,4314,2967,4313,2972,4308,2977,4303,2983,4303,3E3,4303,3002,4294,3020,4294,3056,4287,3061,4287,3067,
4275,3074,4264,3087,4265,3116,4265,3129,4251,3149,4242,3164,4235,3170,4232,3187,4233,3189,4233,3193,4229,3197,4225,3202,4226,3203,4226,3239,4212,3240,4212,3244,4207,3248,4203,3257,4202,3264,4202,3278,4199,3291,4197,3297,4192,3302,4187,3317,4187,3320,4175,3341,4168,3365,4160,3368,4157,3373,4152,3382,4151,3400,4149,3404,4148,3408,4147,3421,4140,3430,4134,3437,4136,3443,4135,3450,4131,3457,4127,3469,4127,3482,4127,3498,4113,3500,4113,3507,4107,3512,4101,3524,4100,3533,4100,3537,4094,3542,4093,3554,4092,
3570,4087,3583,4077,3587,4075,3597,4075,3604,4076,3611,4067,3617,4066,3629,4067,3632,4066,3633,4061,3634,4056,3638,4056,3644,4056,3656,4056,3659,4049,3668,4045,3714,4027,3729,4023,3744,4019,3770,4006,3795,3993,3824,3987,3861,3969,3873,3966,3884,3963,3906,3952,3944,3946,3985,3922,3997,3915,4013,3911,4029,3906,4038,3904,4047,3903,4057,3896,4066,3889,4074,3888,4103,3888,4114,3880,4120,3875,4148,3863,4215,3836,4223,3835,4228,3834,4263,3819,4297,3804,4307,3804,4321,3804,4335,3823,4345,3836,4362,3850,4375,
3866,4416,3899,4495,3940,4537,3940,4578,3939,4598,3934,4617,3929,4635,3924,4652,3919,4672,3898,4694,3875,4706,3870,4735,3859,4780,3828,4804,3815,4813,3800,4816,3794,4850,3794,4875,3794,4884,3797,4907,3803,4923,3806,4938,3809,4967,3807,4997,3804,5010,3806,5030,3810,5071,3814,5106,3819,5126,3830,5131,3833,5163,3834,5194,3836,5199,3842,5209,3852,5224,3865,5236,3876,5241,3890,5244,3896,5253,3911,5261,3927,5261,3942,5261,3965,5265,4018,5265,4055,5256,4061,5249,4068,5250,4083,5252,4111,5253,4112,5249,4136,
5221,4172,5194,4207,5195,4234,"L",5181,4234,5181,4268,"Q",5194,4310,5234,4324,5261,4333,5330,4333,5362,4333,5366,4331,5373,4329,5384,4310,5399,4302,5411,4299,5412,4300,5426,4301,5441,4301,5469,4306,5497,4310,5531,4306,5565,4302,5578,4327,5590,4351,5589,4373,5588,4410,5629,4439,5640,4446,5653,4465,5669,4489,5669,4508,5669,4532,5664,4543,5664,4570,5656,4583,5656,4610,5672,4622,5679,4626,5683,4638,5687,4651,5691,4655,"L",5691,4730,"Q",5688,4731,5683,4730,5683,4730,5683,4736,5683,4742,5689,4746,5689,
4746,5690,4746,"L",5690,4769,"Q",5701,4774,5710,4796,5722,4822,5728,4828,5745,4844,5765,4883,5794,4924,5859,4989,5868,4999,5891,5017,5914,5034,5922,5038,5953,5050,6E3,5066,6060,5098,6078,5107,6097,5115,6118,5113,6139,5112,6164,5093,6171,5086,6179,5072,6188,5067,6204,5060,6208,5056,6224,5041,6237,5030,6283,5020,6329,5009,6344,4997,6354,4990,6378,4978,6401,4966,6418,4947,6435,4927,6448,4927,6460,4926,6474,4921,6486,4916,6505,4916,"L",6550,4916,"Q",6565,4916,6570,4911,6575,4905,6586,4905,6601,4905,6611,
4912,6617,4916,6632,4928,6663,4948,6680,4961,6686,4965,6723,4970,6725,4971,6740,4984,"L",6756,4985,"Q",6772,4990,6780,5001,6785,5008,6794,5024,6802,5033,6817,5062,6829,5085,6844,5095,6857,5104,6927,5147,6942,5157,7011,5201,7020,5206,7046,5230,7072,5249,7093,5246,7094,5246,7095,5246,7105,5244,7103,5234,7129,5234,7145,5225,7146,5208,7157,5210,"L",7157,5203,7166,5203,"Q",7166,5186,7173,5189,"L",7173,5169,7181,5169,7181,5144,"Q",7142,5109,7142,5074,7130,5070,7118,5052,7107,5032,7101,5025,7085,5022,7082,
5020,7075,5016,7070,5009,7054,4989,7052,4986,7024,4977,7025,4968,7025,4957,7021,4950,7016,4944,7013,4938,6996,4901,6999,4867,6997,4868,6991,4862,"L",6991,4808,"Q",6991,4800,6985,4794,6977,4785,6974,4778,6966,4779,6964,4769,6961,4756,6957,4753,6950,4747,6950,4714,"L",6950,4686,"Q",6960,4676,6960,4671,6960,4663,6973,4655,6983,4648,6977,4637,6986,4639,6998,4623,7005,4613,7015,4608,7025,4597,7039,4568,7043,4563,7042,4542,7055,4535,7058,4532,7058,4521,7066,4506,7074,4493,7074,4492,7074,4486,7067,4483,
7059,4480,7056,4475,7052,4464,7042,4457,7027,4439,7022,4433,7012,4424,6989,4428,"L",6966,4428,"Q",6958,4428,6953,4418,6941,4421,6934,4416,6927,4410,6923,4408,6915,4403,6887,4399,6867,4395,6864,4385,"L",6862,4385,"Q",6858,4385,6837,4374,6825,4368,6823,4354,6819,4334,6815,4326,6801,4320,6801,4302,6801,4276,6816,4283,6816,4267,6824,4257,6828,4252,6839,4242,6841,4241,6857,4229,6866,4212,6869,4211,6874,4208,6878,4197,6882,4186,6897,4181,6903,4179,6921,4148,6924,4143,6930,4141,6935,4140,6937,4136,6941,
4127,6952,4115,6954,4112,6959,4095,6964,4097,6970,4093,6977,4089,6974,4085,6977,4073,6984,4065,6989,4060,6993,4049,6998,4043,6998,3998,6998,3988,6985,3969,6973,3951,6972,3950,6942,3913,6929,3912,6907,3911,6826,3875,6816,3877,6803,3873,6784,3867,6780,3866,"L",6780,3858,"Q",6758,3854,6738,3825,6732,3806,6728,3800,6724,3785,6717,3776,6711,3768,6707,3753,6703,3737,6692,3722,6667,3687,6653,3680,6600,3654,6561,3617,6528,3590,6514,3577,6491,3554,6491,3530,6491,3517,6497,3515,6502,3513,6502,3509,6501,3505,
6502,3503,6515,3497,6526,3482,6582,3474,6580,3455,"L",6605,3455,"Q",6605,3461,6606,3465,6634,3463,6635,3494,6646,3494,6651,3502,6653,3506,6658,3516,6660,3518,6674,3524,6683,3528,6680,3536,6688,3535,6695,3538,6704,3541,6701,3549,6702,3550,6708,3550,6715,3552,6719,3559,6720,3559,6736,3559,6746,3558,6743,3566,"L",6785,3566,6785,3557,"Q",6801,3556,6811,3544,6822,3532,6833,3530,"L",6833,3519,6846,3519,6846,3512,6859,3512,"Q",6866,3513,6866,3506,"L",6884,3506,"Q",6881,3496,6886,3491,6894,3485,6896,3481,
6905,3470,6911,3461,6936,3437,6939,3424,6952,3418,6964,3396,6986,3376,6989,3368,6998,3349,7013,3333,7020,3325,7020,3296,7020,3256,6999,3239,6965,3219,6940,3192,6899,3163,6887,3153,6863,3133,6861,3129,6860,3128,6860,3094,"L",6860,3071,"Q",6862,3065,6868,3062,6873,3060,6870,3051,6883,3051,6901,3042,6907,3039,6911,3035,6916,3032,6929,3032,6959,3032,6952,3044,6970,3039,6993,3058,7E3,3060,7001,3067,7002,3074,7005,3075,7019,3081,7019,3082,7021,3084,7020,3092,7032,3094,7035,3104,7036,3110,7038,3124,7040,
3129,7040,3143,7042,3150,7050,3155,7053,3161,7063,3174,7071,3184,7070,3194,7069,3199,7074,3211,7078,3224,7082,3227,7074,3241,7089,3250,7105,3259,7103,3266,"L",7117,3266,7117,3275,"Q",7139,3275,7144,3277,"L",7163,3277,"Q",7166,3269,7166,3265,7185,3265,7188,3258,7192,3253,7198,3252,7204,3251,7206,3246,7220,3213,7222,3206,7223,3200,7223,3152,7232,3145,7232,3108,"L",7232,3074,"Q",7231,3068,7224,3064,7217,3059,7217,3056,7215,3030,7212,3027,7199,3017,7195,3012,7177,2984,7166,2971,7160,2950,7142,2937,"L",
7142,2903,"Q",7151,2908,7152,2900,7154,2889,7167,2889,7164,2878,7177,2869,7187,2862,7196,2862,7196,2860,7199,2852,7224,2852,7234,2842,7245,2839,7255,2839,7259,2837,7259,2824,7259,2819,7254,2818,7248,2817,7247,2808,7247,2793,7244,2789,7242,2788,7242,2744,7222,2752,7206,2729,7191,2708,7191,2683,7191,2662,7194,2660,"L",7217,2660,7217,2667,7250,2667,7250,2657,"Q",7268,2660,7285,2650,7302,2639,7325,2643,"L",7325,2623,"Q",7313,2624,7312,2610,7313,2591,7312,2582,7310,2563,7305,2560,7300,2557,7300,2546,7300,
2540,7312,2492,"L",7334,2492,"Q",7333,2475,7333,2465,7333,2448,7337,2443,"L",7439,2448,7441,2456,7467,2456,7467,2447,7481,2447,7481,2424,7492,2424,7492,2399,7502,2399,7502,2382,7512,2382,7512,2369,7557,2369,7557,2346,"Q",7547,2342,7547,2335,7553,2307,7553,2299,7571,2298,7562,2253,7569,2246,7569,2213,7574,2213,7577,2214,"L",7577,2205,7586,2205,"Q",7585,2215,7596,2215,7609,2216,7611,2219,7618,2226,7645,2224,"L",7645,2255,7641,2255,"Q",7647,2266,7648,2267,7650,2268,7658,2268,7665,2268,7670,2263,7675,
2258,7686,2258,7686,2249,7686,2245,7686,2237,7694,2238,"L",7694,2219,7700,2219,7700,2197,"Q",7694,2195,7681,2195,"L",7680,2183,"Q",7675,2184,7662,2180,7663,2179,7664,2169,7665,2163,7673,2165,"L",7673,2153,7681,2153,7681,2134,7646,2134,7646,2127,7628,2127,7628,2119,"Q",7641,2119,7643,2120,"L",7643,2112,7658,2112,7658,2103,7694,2103,7694,2093,"Q",7708,2095,7721,2087,7719,2072,7740,2076,7740,2065,7747,2064,7750,2063,7774,2063,7775,2060,7775,2053,7790,2054,7805,2042,7816,2041,7847,2042,7848,2042,7850,
2042,7888,2042,7904,2044,"L",7904,2051,7925,2051,7925,2068,"Q",7938,2069,7940,2076,"L",7940,2100,"Q",7934,2100,7931,2102,"L",7931,2123,7937,2123,7937,2139,"Q",7947,2137,7951,2146,7954,2155,7961,2157,7962,2157,7962,2157,"L",7983,2157,"Q",7985,2169,8005,2168,8026,2167,8029,2174,"L",8052,2174,8052,2166,"Q",8066,2166,8068,2143,8067,2117,8067,2112,8067,2071,8061,2066,8053,2059,8053,2047,8052,2033,8049,2028,8036,2009,8039,1991,8040,1978,8036,1968,8032,1957,8032,1953,"L",8033,1922,"Q",8043,1910,8044,1901,
8045,1892,8052,1893,8059,1894,8060,1883,8056,1874,8066,1874,8071,1874,8079,1875,"L",8080,1864,"Q",8100,1863,8103,1856,"L",8117,1856,"Q",8114,1866,8129,1865,8144,1864,8139,1876,8150,1876,8157,1881,8165,1886,8175,1886,8171,1895,8179,1896,8184,1897,8195,1898,8192,1909,8202,1910,8208,1910,8220,1910,8215,1927,8244,1919,"L",8244,1926,8263,1927,8263,1935,"Q",8270,1937,8282,1937,"L",8282,1943,"Q",8289,1943,8294,1944,"L",8324,1944,8324,1935,8343,1935,8343,1923,8353,1923,8353,1901,"Q",8331,1856,8331,1853,8326,
1857,8323,1853,8297,1840,8262,1795,8222,1744,8222,1717,8222,1705,8232,1695,8234,1687,8234,1667,"L",8246,1667,8246,1649,"Q",8262,1654,8265,1644,8268,1632,8279,1633,8279,1621,8280,1614,"L",8280,1604,"Q",8238,1605,8229,1604,8219,1603,8219,1574,8219,1556,8220,1554,8222,1547,8234,1548,"L",8234,1475,8186,1475,"Q",8165,1485,8159,1485,8151,1485,8151,1484,8149,1479,8146,1470,8144,1467,8135,1464,8127,1462,8129,1454,8128,1454,8101,1457,8085,1458,8083,1451,8081,1446,8081,1398,8081,1370,8070,1358,8058,1345,8058,
1341,8060,1331,8060,1325,"L",8068,1325,8068,1316,8064,1315,7991,1315,"Q",7985,1314,7981,1306,7975,1297,7971,1295,7968,1293,7932,1293,"L",7932,1262,"Q",7940,1260,7940,1240,7940,1217,7937,1213,7932,1206,7931,1204,7929,1200,7922,1201,7920,1201,7904,1191,7890,1182,7872,1186,"L",7872,1160,"Q",7865,1155,7862,1145,7833,1145,7820,1144,7797,1143,7784,1137,7776,1134,7764,1135,7750,1136,7746,1135,7739,1133,7735,1128,7732,1124,7720,1124,7675,1145,7666,1145,7653,1145,7652,1142,"L",7652,1125,"Q",7652,1121,7644,
1111,7636,1100,7629,1100,"L",7629,1086,"Q",7625,1087,7611,1076,"L",7611,1064,"Q",7655,1067,7655,1047,7645,1038,7641,1034,"L",7641,1021,7649,1021,7649,1014,7670,1014,"Q",7672,1016,7673,1023,7674,1029,7684,1029,7682,1035,7685,1041,7689,1049,7697,1045,7693,1056,7705,1059,7729,1065,7735,1068,"L",7735,1076,7758,1076,"Q",7755,1069,7755,1065,"L",7763,1065,7763,1043,"Q",7755,1022,7733,1004,7727,993,7721,987,7721,987,7718,966,"L",7677,966,7676,931,"Q",7667,927,7667,919,7668,905,7669,900,"L",7669,887,7652,
887,"Q",7651,887,7646,897,"L",7637,897,"Q",7627,895,7625,889,7623,878,7621,875,7600,863,7592,863,7584,864,7578,858,7573,853,7563,854,7557,855,7548,850,7542,846,7538,845,"L",7477,841,"Q",7482,823,7453,826,7445,827,7440,819,7435,811,7427,812,7426,786,7423,777,7420,763,7397,763,7380,763,7377,768,7374,773,7358,773,7345,773,7336,763,7327,753,7320,753,7284,753,7276,758,7264,765,7239,768,7223,770,7214,785,7206,798,7190,798,7175,798,7168,785,"L",7161,785,"Q",7160,786,7156,786,7156,799,7146,795,7145,801,7146,
807,"L",7136,807,"Q",7118,795,7110,789,7097,779,7094,765,7064,766,7054,765,7040,765,7035,756,"L",7016,756,"Q",7023,774,7011,786,6999,798,6981,790,"L",6981,802,"Q",6979,803,6970,803,6958,803,6956,800,6953,798,6953,784,6953,778,6957,775,6960,772,6960,767,6959,755,6959,748,6938,743,6926,743,"L",6867,744,"Q",6870,752,6865,758,6860,766,6860,777,"L",6860,810,"Q",6812,807,6808,807,6790,814,6765,814,6751,814,6750,813,6744,811,6744,799,6747,788,6747,782,6746,772,6731,773,"L",6731,731,"Q",6731,731,6740,734,
"L",6740,719,"Q",6767,730,6774,708,6776,678,6777,668,"L",6795,668,"Q",6795,652,6796,645,6796,631,6804,630,"L",6804,598,"Q",6789,597,6783,596,6780,596,6778,590,6776,586,6773,584,6718,584,6702,576,6672,578,6666,572,6662,568,6661,555,6661,545,6653,544,"L",6653,534,6626,534,"Q",6622,545,6614,545,"L",6599,544,6599,534,6592,534,6592,467,"Q",6606,464,6605,447,6604,433,6611,435,6610,425,6611,420,6612,411,6621,413,"L",6621,364,"Q",6595,368,6589,357,6584,349,6556,349,6529,349,6515,356,6509,359,6511,364,6513,
368,6495,383,6485,382,6464,437,6457,437,6446,451,6434,466,6422,466,6388,466,6378,434,"L",6371,434,6371,450,"Q",6352,454,6330,454,6324,454,6307,448,6287,441,6281,434,"L",6248,434,"Q",6246,445,6228,464,6218,464,6213,466,"L",6155,466,"Q",6156,455,6148,447,6138,440,6134,437,6132,435,6117,435,6104,434,6099,425,"L",6089,425,"Q",6088,436,6080,437,"L",6080,455,6035,455,"Q",6017,457,6019,427,6020,399,5999,405,"L",5982,405,"Q",5981,396,5981,390,5970,392,5972,376,5961,374,5959,364,5958,356,5944,356,"Q",5932,
356,5931,366,"Z"]],label:"Monofiya",shortLabel:"MO",labelPosition:[572.8,263.6],labelAlignment:["center","middle"]}}}];d=e.length;if(a)for(;d--;)a=e[d],c(a.name.toLowerCase(),a,c.geo);else for(;d--;)a=e[d],g=a.name.toLowerCase(),b("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,b){c.geo?c(a,b,c.geo):f.raiseError(f.core,"12052314141","run","JavaScriptRenderer~Maps._call()",Error("fusioncharts.maps.js is required in order to define vizualization"))},[g,a],window]})}]);

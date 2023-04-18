<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class StoreFruits extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:store-fruits';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try {

            $response = Http::get('https://fruityvice.com/api/fruit/all');

            if($response){
                
                foreach(json_decode($response)  as $key => $fruit){
  
                    $fruitDB= Fruit::where("name",$fruit->name)->first();

                    if(!$fruitDB){

                        Fruit::insert(
                            ['name' => $fruit->name ,
                           
                                'carbohydrates' => $fruit->nutritions->carbohydrates, 
                                'fat' => $fruit->nutritions->fat,
                                'sugar' => $fruit->nutritions->sugar, 
                                'protein' => $fruit->nutritions->protein,
                                'carbohydrates' => $fruit->nutritions->carbohydrates, 
                                'calories' => $fruit->nutritions->calories,
                                'order_id' => self::getOrder($fruit->order),
                                'family_id' => self::getFamily($fruit->family),
                                'genus_id' => self::getGenus($fruit->genus)
                            ]
                        );
     
                    }
                    
                }
            }
  

            // Validate the value...
        } catch (Throwable $e) {

            report($e);
     
            return false;
        }
    }
}

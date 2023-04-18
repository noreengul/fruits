<?php

namespace App\Console\Commands;

use App\Models\Family;
use App\Models\Fruit;
use App\Models\Genus;
use App\Models\Order;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
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

            $details = [
                'title' => 'Fruits Data Store',
                'body' => 'This is for testing email using mailtrap by noreen'
            ];

            \Mail::to('noreengul4@gmail.com')->send(new \App\Mail\AdminMail($details));

            return "Data stored";

            // Validate the value...
        } catch (Throwable $e) {

            report($e);

            return false;
        }
    }

    public function getOrder($name){

        $order = Order::where("name",$name)->first();
        if(!$order){
            $order = Order::create([
                "name" => $name
            ]);
        }

        return $order->id;
    }


    public function getFamily($name){

        $data = Family::where("name",$name)->first();
        if(!$data){
            $data = Family::create([
                "name" => $name
            ]);
        }

        return $data->id;
    }

    public function getGenus($name){

        $data = Genus::where("name",$name)->first();
        if(!$data){
            $data = Genus::create([
                "name" => $name
            ]);
        }

        return $data->id;
    }
}

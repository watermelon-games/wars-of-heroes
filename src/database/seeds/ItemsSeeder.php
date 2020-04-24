<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class ItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->data() as $value) {
            DB::table('items')->insert($value);
        }
    }

    protected function data()
    {
        return [
            [
                'name' => 'Dynasty Leather Armor',
                'description' => 'Dynasty Leather Armor',
                'type' => 'armor',
                'effects' => json_encode(
                    [
                        'defence' => '+100',
                        'hp' => '+20',
                        'luck' => '+5',
                    ]),
                'price' => 100,
                'available' => 1,
                'image' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Dynasty Platinum Plate',
                'description' => 'Dynasty Platinum Plate',
                'type' => 'armor',
                'effects' => json_encode(
                    [
                        'defence' => '+170',
                        'hp' => '+50',
                        'luck' => '+1',
                    ]),
                'price' => 180,
                'available' => 1,
                'image' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Dynasty Leather Helmet',
                'description' => 'Dynasty Leather Helmet',
                'type' => 'helmet',
                'effects' => json_encode(
                    [
                        'defence' => '+30',
                    ]),
                'price' => 115,
                'available' => 1,
                'image' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Dynasty Platinum Plate Helmet',
                'description' => 'Dynasty Platinum Plate Helmet',
                'type' => 'helmet',
                'effects' => json_encode(
                    [
                        'defence' => '+70',
                    ]),
                'price' => 115,
                'available' => 1,
                'image' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Steel Dynasty Gauntlets',
                'description' => 'Steel Dynasty Gauntlets',
                'type' => 'gloves',
                'effects' => json_encode(
                    [
                        'defence' => '+50',
                        'strength' => '+2',
                    ]),
                'price' => 70,
                'available' => 1,
                'image' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Leather Dynasty Gloves',
                'description' => 'Leather Dynasty Gloves',
                'type' => 'gloves',
                'effects' => json_encode(
                    [
                        'defence' => '+50',
                        'luck' => '+2',
                    ]),
                'price' => 70,
                'available' => 1,
                'image' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Damascus Sword',
                'description' => 'Legendary Damascus Sword',
                'type' => 'weapon',
                'effects' => json_encode(
                    [
                        'damage' => '+150',
                        'hp' => '+50',
                        'strength' => '+10',
                        'luck' => '+5',
                    ]),
                'price' => 300,
                'available' => 1,
                'image' => null,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
        ];
    }
}

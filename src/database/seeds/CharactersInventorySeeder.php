<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class CharactersInventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->data() as $value) {
            DB::table('characters_inventory')->insert($value);
        }
    }

    protected function data()
    {
        return [
            [
                'character_id' => 18,
                'item_id' => 1,
                'is_equipped_item' => false,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'character_id' => 18,
                'item_id' => 2,
                'is_equipped_item' => false,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'character_id' => 18,
                'item_id' => 3,
                'is_equipped_item' => false,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'character_id' => 18,
                'item_id' => 4,
                'is_equipped_item' => false,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ], [
                'character_id' => 18,
                'item_id' => 5,
                'is_equipped_item' => false,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
        ];
    }
}

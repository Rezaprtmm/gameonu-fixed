<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            "uname" => "admin",
            'email' => 'admin@gameonu.test',
            'password' => bcrypt('password'),
        ]);
        $admin->assignRole('admin');
    }
}

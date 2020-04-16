<?php

namespace App\Models\Enum;

class Experience
{
    const FIRST_LEVEL = 1;
    const SECOND_LEVEL = 2;
    const THIRD_LEVEL = 3;
    const FOUR_LEVEL = 4;
    const FIVE_LEVEL = 5;
    const SIX_LEVEL = 6;
    const SEVEN_LEVEL = 7;
    const EIGHT_LEVEL = 8;
    const NINE_LEVEL = 9;
    const TEN_LEVEL = 10;

    const EXP_TO_SECOND_LEVEL = 100;
    const EXP_TO_THIRD_LEVEL = 300;
    const EXP_TO_FOUR_LEVEL = 800;
    const EXP_TO_FIVE_LEVEL = 1500;
    const EXP_TO_SIX_LEVEL = 2000;
    const EXP_TO_SEVEN_LEVEL = 3000;
    const EXP_TO_EIGHT_LEVEL = 5500;
    const EXP_TO_NINE_LEVEL = 8000;
    const EXP_TO_TEN_LEVEL = 10000;

    public function getNeededExperience(int $level): string
    {
        switch ($level) {
            case self::FIRST_LEVEL:
                return self::EXP_TO_SECOND_LEVEL;
                break;
            case self::SECOND_LEVEL:
                return self::EXP_TO_THIRD_LEVEL;
                break;
            case self::THIRD_LEVEL:
                return self::EXP_TO_FOUR_LEVEL;
                break;
            case self::FOUR_LEVEL:
                return self::EXP_TO_FIVE_LEVEL;
                break;
            case self::FIVE_LEVEL:
                return self::EXP_TO_SIX_LEVEL;
                break;
            case self::SIX_LEVEL:
                return self::EXP_TO_SEVEN_LEVEL;
                break;
            case self::SEVEN_LEVEL:
                return self::EXP_TO_EIGHT_LEVEL;
                break;
            case self::EIGHT_LEVEL:
                return self::EXP_TO_NINE_LEVEL;
                break;
            case self::NINE_LEVEL:
                return self::EXP_TO_TEN_LEVEL;
                break;
            default:
                return 0;
                break;
        }
    }
}

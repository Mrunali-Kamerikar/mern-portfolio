import Skill from "../models/Skill.model.js";

/**
 * @desc    Get all skills (public)
 * @route   GET /api/skills
 * @access  Public
 */
export const getSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find().sort({ category: 1 });
    res.status(200).json({
      success: true,
      data: skills
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Add new skill
 * @route   POST /api/skills
 * @access  Admin
 */
export const addSkill = async (req, res, next) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({
      success: true,
      data: skill
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update skill
 * @route   PUT /api/skills/:id
 * @access  Admin
 */
export const updateSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!skill) {
      res.status(404);
      throw new Error("Skill not found");
    }

    res.status(200).json({
      success: true,
      data: skill
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete skill
 * @route   DELETE /api/skills/:id
 * @access  Admin
 */
export const deleteSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      res.status(404);
      throw new Error("Skill not found");
    }

    res.status(200).json({
      success: true,
      message: "Skill deleted"
    });
  } catch (error) {
    next(error);
  }
};
